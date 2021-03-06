# React-TripMemory 


summary of work

<p> The posts need to be displayed some way and I am using alot of resources from material-ui to do the work. Whenever a site depends on data,it is great to run a conditional statement to make sure that if data does not post, a back-up is prepared which I have done with circular progress. If there is data, we are going to circle through our posts data with a map function to target each item in the object. The format of this card will be used my material-ui Card, Typography, Button and more.</p>

<h3> Updating Functionality </h3>

<p>After I am able to display the posts onto the page, the next step is to update some of the functionality like editing the post. I need to make sure I have the id of the existing post. In order to handle this I created a new path/function to update Posts in the controller folder on my server side. First I need to extract the id from the req.params. To make sure everything is good, it is good practice to write an "if" statement to check if the Types.ObjectId is valid and if it is not, will send a message. First I am trying to pass the ID without using redux for practice. The issue with setting the id in a state is that you have to go into every component and pass it as a prop which can be confusing or tough which is why redux is amazing. Once it is set up, I can start implementing it on the front-end inside the Posts and Form. After creating the updatePost in the actions, I must go to the reducers to tell what actions the update will do and how it will use the payload. The reducer part of the update will decide that if the ._id matches then carry the action. WIth the useEffect, I am using this to update the data on the main page because of the dependency array by clicking the '...' which will put the dinformation into the form to be updated. </p>

<h3>Delete functionalty</h3>

<p>When trying to delete and create a new functionalitly, several things has to occur. Specifically for this delete function, first need to go into the server file which I go into the routes to make a new route to delete the post. When I do this with router.delete(), I then have to create this function in the controllers section in my files. After I make the deletePost function which is very similar to the updatedPost because it requires the same Id and same method to retrieve it. The difference is is the PostMessage. Once everything is done with the controllers, then I can go to the front-end side and start to implement the server logic. First thing to do on the front-end side is to go into my api folder and create an export const for a 'deletePost'. The next step would then be to go into actions folder, which has the posts.js file to create the function. Very similar to what we did on the back-end with routes into controllers. Actions and reducers, go hand to hand so once I did something in actions, need to make sure it has a complimentary reducer to follow the same type.</p>

<h3>Liking Functionality</h3>

<p>Once the proper structure is already set up, it is easier to scale. In order to start with the like function, I went into routes to add a new router path which then needs a corresponding function in the controllers folder. The likePost function will be very similar to the updatePost where it will see if the type is valid then then add a post like up 1. Once again after work is done in the controllers section on the server side, it has to be incoporated into the api folder on the front-end. Then the same process occus with the delete functionality. </p>

<h3>JWT/Login </h3>

<p>First we need to install some packages on the client folder. These packages will help me with the user log in and they are jwt-decode and react-google-login. For the backend, you need to install bcryptjs
and jsonwebtoken in the server folder. I need to add a proper NavBar in order to incoprate the log in function so I can apply a button that will redirect the user to a login form. First I need to remove some of the code I have in the app.js and place it into a designated App bar function. After this and place the proper function, I think will start with the Google Oauth log in which is imported with a package. After the package, I created the component in the sign in form. After setting up everything with the developer google site, then we can try to log in and see if there is a response in the console. Since the procress is using an async funtion, we can use the try and catch method. When it is succeful we will use dispatch(redux) to perform an action and in this case, set the id into localstorage so users dont have always relog. After setting it to local storage, for a good user experience I redirected the user to the page. I tried this at first with useHistory but found that it was outdated. Instead, using navigate from react-router-dom to do the same action.  


<p>With the JWT, I need to first be able to record all the data with the forms. I tested this with several functions and at first I wasn't getting it to work with the password in the sign in because I forgot the handleChange function on the input field. After I made sure I can change the initialState I created with the form, I started to create the back-end portion for the JWT to be used. First, the routes have to be made and then brought in with the server file. After the routes are set up, for the signin and signup, need to make a users file in the controllers to handle the requests to the backend. To send the requests, I need to make sure I am retrieveing them fron the front end and since it is an async block, I can use a try/catch to hold most of the logic. I need to first find if a user exists with 'await User.findOne({email});' and then if does not exist, should return a message. This kind of process will be done for the rest of the signin and will be very similar to the signup.

</p>


<h3>Redux Workflow</h3>
<p>First, everything happens with the form which is in the Auth component. Once all the inputs are typed, we want to dispatch a certain action which has something to do with redux. An example is the process of Sign-In as a new user. In the Sign-In, we are dispatching two things, the formData which is being send with a handleChange function and then sending the user to the homepage. Once we dispatch, we are going to the actions which will make another action in our actions folder. However, it goes to another step to our API so it makes a post request that gets some data. After getting some data, we will dispatch a type of Auth for both signIn and signUp.</p>
  
