//import fetch from 'node-fetch';
const fetch = require('node-fetch');


module.exports = {
		//use of express middleware!!
	  index(req, res, next) {
	    fetch('https://jsonplaceholder.typicode.com/posts')
	    	//this is how you convert json data from the response
	      .then( res => res.json())
	      .then(
	        (json) => {
	      		//response local variables aka the posts!
	          res.locals.posts = json;
	          next();
	        }
	      );
	  },
};