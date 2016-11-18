var express = require('express'),
    mongoose = require('mongoose'),
    fileSize = require('filesize'),
    multer = require('multer'),
    app = express();

//setup body-parser
// app.use(multer({dest:'./fileUpload/'}).single('fileInside'));

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.render('index');
});

app.post('/getFile', multer().single('fileInside'), function(req, res, next){
  console.log(req.file);
  res.json({fileSize : req.file.size});
});


app.listen('4000', function(){
  console.log('listening to 4000');
});
