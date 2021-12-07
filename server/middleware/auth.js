import jwt from 'jsonwebtoken';


// what the next does, I want to like a  post, User clicks button then => auth middleware should deteremine if it can like it or not then => like controller

// next means do something then do something else
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        // if our token is less then that means it is our own token
        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'secret');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            // sub is what google uses to define the user
            req.userId = decodedData?.sub;
        }

        next();
    } catch(error) {
        console.log(error);
    }
}


export default auth;


