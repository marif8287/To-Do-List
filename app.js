
const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const getDate = require(__dirname + "/date.js");  // we defined our own module in file date.js and we are using that module to find day 

const app = express();

var workToDo =[];
var tasks =[];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){

    let date = getDate.getDate();                               // using date.js self made module to return the day and date.
    res.render("list",{listTitle:date, newtask:tasks});
});


app.get("/work",function(req,res){

    res.render("list",{listTitle: "Work To Do",newtask: workToDo});
})

app.get("/about",function(req,res){

    res.render("about");
})

// app.post("/work",function(req,res){

//     var work = req.body.task;
//     workToDo.push(work);

//     res.redirect("/work")
// })

app.post("/", function(req,res){

    var task = req.body.task;

    if(req.body.list ==="Work To Do"){

        workToDo.push(task);
        res.redirect("/work");
    }

    else{
        tasks.push(task);
        res.redirect("/");
    }   
})

app.listen(3000,function(){

      console.log("server is running on port 3000");
})