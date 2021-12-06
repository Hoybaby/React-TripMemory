import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import  User  from '../models/user.js';

export const signin = async( req, res) => {

    // first to sign in, we need the password and email
    // we get it from the post request.
    const { email, password } = req.body; // all the post data will be coming from here
    
    try {
        // this will be searching for the exisiting user in the database
        const existingUser = await User.findOne({email});

        if (!existingUser) return res.status(404).json({message: 'User not found'});

        // we cant do a normal string check because of the bcrypptsjs
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid Credentials'});
        // wil change the secret key in the future
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'secret', { expiresIn: '1h'}); 
        res.state(200).json({ result: existingUser, token });
    } catch (error) {
        res.stateus(500).json({ message: 'something went wrong' });
    }

}

export const signup = async( req, res) => {
    
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    try {
        
        const existingUser = await User.findOne({email});
        // first we need to check if the user already exists
        if (existingUser) return res.status(404).json({message: 'User already exists'});

        if(password !== confirmPassword) return res.status(404).json({message: 'Passowrds do not match'});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({email: result.email, id: result._id}, 'secret', { expiresIn: '1h'});

        res.state(200).json({ result, token });

    } catch {
        res.status(500).json({ message: 'something went wrong' });
    }

}