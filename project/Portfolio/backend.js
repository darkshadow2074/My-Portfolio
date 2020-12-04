const http =require("http");
const file = require("fs");
const fileContent = file.readFileSync("./index.html");
const port = 80;
const url = "127.0.0.1"


const server = http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader = ("Content-type","text/html");
    res.end(fileContent);
});

server.listen(port,()=>{
    console.log("Listening to :" + url + port)
})