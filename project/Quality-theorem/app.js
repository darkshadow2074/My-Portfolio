const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080 ;

const app = express();

mongoose.connect('mongodb://localhost/qualityTheorem',{useNewUrlParser: true, useUnifiedTopology: true})

const customerSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    ContactNumber: Number,
    Emails: String,
    CompanyNames: String,
}) 
var customer = mongoose.model("Customer" ,  customerSchema );


const consultantSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    ContactNumber: Number,
    Emails: String,
    Qualification: String,
    Experience: String,
    Visa: String,
    Skills: String,
}) 

const consultant = new mongoose.model("Consultant",consultantSchema)


const employeeSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    ContactNumber: Number,
    Emails: String,
    Qualification: String,
    Designation: String,
}) 

const employee = mongoose.model("Employee" , employeeSchema);



app.use("/static" , express.static("static"))
app.use("/images" , express.static("images"))
app.use("/css" , express.static("css"))
app.use(express.urlencoded());

app.set("view engine" , "html");
app.set("views" , path.join(__dirname,"views"));


app.get('/' , (req,res)=>{
    res.status(200).sendFile(__dirname + '/views/index.html');
});

app.get('/home' , (req,res)=>{
    res.status(200).sendFile(__dirname + '/views/index.html');
});

app.get('/customer' , (req,res)=>{
    res.status(200).sendFile(__dirname + '/views/customer.html');
});


app.post('/customer',(req,res)=>{
 
    let customerData = new customer(req.body);
    customerData.save().then(()=>{
        console.log("Customer Data Enterd Successfully!!!!");
        res.status(200).sendFile(__dirname + '/views/customer.html');
        // alert("Customer Entry Done");
    }).catch(()=>{
        res.status(400).send("Customer Data Has Not Been Saved Yet!!!!")
    })
});






app.get('/consultant' , (req,res)=>{
    res.status(200).sendFile(__dirname + '/views/consultant.html');
});

app.post('/consultant', (req,res)=>{
    let consultantData = new consultant(req.body);
    consultantData.save().then(()=>{
         console.log("Consultant Data Enterd Successfully!!!!");
         res.status(200).sendFile(__dirname + '/views/consultant.html');
    }).catch(()=>{
        res.status(400).send("Consultant Data Has Not Been Saved Yet!!!!");
    })
})


app.get('/employee' , (req,res)=>{
    res.status(200).sendFile(__dirname + '/views/employee.html');
});

app.post('/employee',(req,res)=>{
     let employeeData = new employee(req.body);
     employeeData.save().then(()=>{
         console.log("Employee Data Enterd Successfully!!!!");
         res.status(200).sendFile(__dirname + '/views/employee.html');
     }).catch(()=>{
         res.status(400).send("Employee Data Has Not Been Saved Yet!!!!")
     })
})
app.listen(port,(req,res)=>{
     console.log(`Listening To Port ${port}`);
});