var express = require('express');
const port = 3000;
const axios = require('axios');
var app   = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('landing');
});
app.get('/cupcakes',(req,res)=>{
    res.render('index');
});
app.listen(port,()=>{
    console.log("Server is running");
});