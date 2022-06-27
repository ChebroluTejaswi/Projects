const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");

// -----------------------------------
app.get("/", function (req, res) {
  res.render("home");
});
// -----------------------------------

python = {
  1: {
    name: "PURPLE- The Student Companion",
    image: "https://user-images.githubusercontent.com/68593617/126888295-f6d0777c-f53d-4478-9972-ff031d48b4d6.png",
    description:
      "PURPLE , a smart voice assistant to rescue the needs of current day students. This project acts as a friend and assistant to students. It also helps the students in avoiding the major personal issue of procrastination.This projects main functions: -> Time Management Skills ->Task Management ->Marks analysis ->Smart understanding Companion ->Cures Boredom Purple stands out from other assistants like alexa and siri which are not specific to students.",
    technology:["python","tikinter"],    
      github: "https://github.com/ChebroluTejaswi",
  },
};
app.get("/python", function (req, res) {
  res.render("python");
});
app.get("/python/:projectID", function (req, res) {
  obj = python[req.params.projectID];
  res.render("project", {
    name: obj["name"],
    image: obj["image"],
    description: obj["description"],
    technology:obj["technology"],
    github: obj["github"],
  });
});

// --------------------------------
app.get("/webdev", function (req, res) {
  res.render("webdev");
});
app.get("/ml", function (req, res) {
  res.render("ml");
});
app.get("/achievements", function (req, res) {
  res.render("achievement");
});
app.get("/onlinecertificates", function (req, res) {
  res.render("onlinecertificates");
});
// -----------------------------------
app.listen(3000, function () {
  console.log("Server started successfully");
});
