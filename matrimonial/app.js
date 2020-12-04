const express = require("express");
const path = require("path");
// const fs = require("fs");
// const { urlencoded } = require("express");
const app = express();
const port = 90;

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const { stringify } = require("querystring");
mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser: true, useUnifiedTopology: true});
//mongoose.connect('mongodb://localhost/customerDetails',{useNewUrlParser: true, useUnifiedTopology: true});
var contactSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    Phone: Number,
    Email: String,
    Concern: String,
})

var contact = mongoose.model("Contact",contactSchema);



app.use("/image",express.static("image"));
app.use("/static",express.static("static"));
app.use(express.urlencoded());


app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"))


app.get('/',(req,res)=>{
    const parameter = {};
    res.status(200).render("index.pug",parameter);
})

app.get('/home',(req,res)=>{
    const parameter = {};
    res.status(200).render("home.pug",parameter);
})

app.get('/contact',(req,res)=>{
    const parameter = {};
    res.status(200).render("contact.pug",parameter);
})



app.post('/contact',(req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        console.log("This Item Has Been Saved to DataBase");
        res.status(200).render("contact.pug");
    }).catch(()=>{
        res.status(400).send("Item Was Not Saved");
    })
})


app.listen(port,(req,res)=>{
    console.log("Listening to Port " + port);
})
