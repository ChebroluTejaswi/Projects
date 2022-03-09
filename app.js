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
app.get("/webdev",function(req,res){
    res.render("webdev");
});
app.get("/ml",function(req,res){
    res.render("ml");
});
// -----------------------------------
app.listen(3000, function () {
    console.log("Server started successfully");
});