# React-TripMemory 


summary of work

<p> The posts need to be displayed some way and I am using alot of resources from material-ui to do the work. Whenever a site depends on data,it is great to run a conditional statement to make sure that if data does not post, a back-up is prepared which I have done with circular progress. If there is data, we are going to circle through our posts data with a map function to target each item in the object. The format of this card will be used my material-ui Card, Typography, Button and more.</p>

<p>After I am able to display the posts onto the page, the next step is to update some of the functionality like editing the post. I need to make sure I have the id of the existing post. In order to handle this I created a new path/function to update Posts for users of that post. First I need to extract the id from the req.params. To make sure everything is good, it is good practice to write an "if" statement to check if the Types.ObjectId is valid and if it is not, will send a message.</p>