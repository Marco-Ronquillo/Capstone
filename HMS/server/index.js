var express = require("express")
var mongoose = require("mongoose")
var cors = require("cors")
var patientModel = require("./models/patient")
var MongoClient= require("mongodb").MongoClient;
const multer=require("multer")

var app = express();
app.use(cors())

var CONNECTION_STRING="mongodb+srv://marcoronquillo:ronquillomarco@cluster.i4nif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"


var DATABASENAME="patients";
var database;

app.listen(5173, () => {
    MongoClient.connect(CONNECTION_STRING,(error,client)=>{ 
    database=client.db(DATABASENAME);
    console.log("server is running");
    })   
})
