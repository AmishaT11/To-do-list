const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const date= require(__dirname+"/date.js");
var items=["Buy-Food","Cook-Food","Eat-Food"];
var workItems=[];
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  let day= date.getDate();
  res.render('list',{listTitle:day, newlistItems:items});
 });

app.post("/",function(req,res){
  var item=req.body.newItem;
  if(req.body.list ==="work"){
    workItems.push(item);
    res.redirect("/work");
  } else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
    res.render('list',{listTitle:"Work list" , newlistItems: workItems});
});

app.get("/about",function(req,res){
    res.render('about');
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
 })
 