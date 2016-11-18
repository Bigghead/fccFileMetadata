var express = require('express'),
    mongoose = require('mongoose'),
    fileSize = require('filesize'),
    multer = require('multer'),
    app = express();

//setup body-parser
var upload = multer({ dest: './getFile/' })

app.set('view engine', 'ejs');



app.get('/', function(req, res){
  res.render('index');
});

app.post('/getFile', upload.single('fileInside'), function(req, res, next){
  console.log(req.body);
  res.send('done');
});


app.listen('4000', function(){
  console.log('listening to 4000');
});
