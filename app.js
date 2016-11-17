var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

//setup body-parser
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/getFile', function(req, res){
  console.log(req.body)
  res.send('file');
});


app.listen('4000', function(){
  console.log('listening to 4000');
});
