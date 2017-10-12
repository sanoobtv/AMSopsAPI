
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var express = require ('express')
var db = require('./api/config/db');

app=express()
port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url,(err, database) => {
if(err) return console.log(err)
require('./api/routes')(app, database);

app.listen(port,() => { console.log('Started on'+ port);
});
})
