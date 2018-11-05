//most of this was scaffolded for me
//-------------------------------------------------------------------
var express = require('express');
var app = express();
var port = process.env.PORT || 8042;
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
//-------------------------------------------------------------------

//importing of modules
const aboutMeRoute = require('./app/routes/AboutMe');
const postsRoute = require('./app/routes/Posts');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
 // set up ejs for templating




//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);


//set up routes
app.use('/posts', postsRoute);
app.use('/aboutme', aboutMeRoute);


//any other route should render the error view which is simple plain text
app.use('*', (req,res)=>{
	res.render('error');
});

exports = module.exports = app;