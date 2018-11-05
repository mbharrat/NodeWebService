const data = require('../models/Data');
const Query = require('../models/Search');

//json file
const me = data.dataReturn();


module.exports = {
	//express middleware
  index(req, res) {
  	//here's my json object after running my search function
   const data = Query.search(req.query,me);
   	//send back status code and the json data
    res.status(200).json(data);
  },
};