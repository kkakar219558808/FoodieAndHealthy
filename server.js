var express=require('express')
var router = express.Router();
var app=express()
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
         console.log("wow")
         res.send("hi")
      })

var port=3000;
app.listen(process.env.PORT || port);
console.log("Server listening on" +port)

var mongodb = require('mongodb');

require('express-async-errors');

// Database Settings
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.get('/Thai/:refCode', (req, res) => {
   
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("FoodieAndHealthy");
       
        dbo.collection("Thai").find({
            Recipe: req.params.refCode
        }).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            console.log("found"+req.params.refCode);
            db.close();
       
        });
       
    });
});

app.get('/Dessert/:refCode', (req, res) => {
   
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("FoodieAndHealthy");
       
        dbo.collection("Dessert").find({
            Recipe: req.params.refCode
        }).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            console.log("found"+req.params.refCode);
            db.close();
       
        });
       
    });
});


app.get('/starters/:refCode', (req, res) => {
   
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("FoodieAndHealthy");
       
        dbo.collection("starters").find({
            Recipe: req.params.refCode
        }).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            console.log("found"+req.params.refCode);
            db.close();
       
        });
       
    });
});
app.get('/Continental/:refCode', (req, res) => {
   
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("FoodieAndHealthy");
       
        dbo.collection("Continental").find({
            Recipe: req.params.refCode
        }).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            console.log("found"+req.params.refCode);
            db.close();
       
        });
       
    });
});
app.get('/Indian/:refCode', (req, res) => {
   
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("FoodieAndHealthy");
       
        dbo.collection("Indian").find({
            Recipe: req.params.refCode
        }).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            console.log("found"+req.params.refCode);
            db.close();
       
        });
       
    });
});

app.post('/Feedback', (req, res,next) => {
    // Connect to DB
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("FoodieAndHealthy");

    // Save output to DB
    var data = { Name:req.body.Name, Email_Address:req.body.Email_Address, Subject:req.body.Subject, Feedback:req.body.Feedback };
    dbo.collection('Feedback').insertOne(data, function(err, res) {
      if (err) throw err;
      console.log('Record inserted into feedback');
      db.close();
      });
    })
  // Let Node know that the DB has recieved the POST and that the HTTP connection can be closed to free up resources.
res.redirect('/'); 
})
