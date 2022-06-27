const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

// -----------------------------------
app.get("/",function(req,res){
    res.render("home");
});
// -----------------------------------

python={1:{"name": 'Tejaswi',"description": 'abcd',"github":'https://github.com/ChebroluTejaswi'}}
app.get("/python",function(req,res){
    res.render("python");
});
app.get("/python/:projectID", function(req, res){
    res.render("project");
});
app.get("/abc",function(req,res){
    res.render("project");
});

// --------------------------------
app.get("/webdev",function(req,res){
    res.render("webdev");
});
app.get("/ml",function(req,res){
    res.render("ml");
});
app.get("/achievements",function(req,res){
    res.render("achievement");
});
app.get("/onlinecertificates",function(req,res){
    res.render("onlinecertificates");
});
// -----------------------------------
app.listen(3000, function () {
    console.log("Server started successfully");
});