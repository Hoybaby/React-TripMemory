# React-TripMemory 


summary of work

<p> The posts need to be displayed some way and I am using alot of resources from material-ui to do the work. Whenever a site depends on data,it is great to run a conditional statement to make sure that if data does not post, a back-up is prepared which I have done with circular progress. If there is data, we are going to circle through our posts data with a map function to target each item in the object. The format of this card will be used my material-ui Card, Typography, Button and more.</p>

<h3> Updating Functionality </h3>
<p>After I am able to display the posts onto the page, the next step is to update some of the functionality like editing the post. I need to make sure I have the id of the existing post. In order to handle this I created a new path/function to update Posts in the controller folder on my server side. First I need to extract the id from the req.params. To make sure everything is good, it is good practice to write an "if" statement to check if the Types.ObjectId is valid and if it is not, will send a message. First I am trying to pass the ID without using redux for practice. The issue with setting the id in a state is that you have to go into every component and pass it as a prop which can be confusing or tough which is why redux is amazing. Once it is set up, I can start implementing it on the front-end inside the Posts and Form. After creating the updatePost in the actions, I must go to the reducers to tell what actions the update will do and how it will use the payload. The reducer part of the update will decide that if the ._id matches then carry the action. WIth the useEffect, I am using this to update the data on the main page because of the dependency array by clicking the '...' which will put the dinformation into the form to be updated. </p>