const express=require("express");
const app =express();
const fs=require("fs");
const path=require("path");
const public =path.join(__dirname,"public");
app.use(express.static(public));
app.set("view engine","ejs");
const filterURL=(req,res,next)=>{
     if(!req.query.user)
     res.locals.user="Guest";
     next();
}
//app.use(filterURL);
app.get("/user",(req,res)=>{
   var user;
     if(req.query.name)
     {
      user=req.query.name;
     } else 
     {
      user="Guest";
     }
     var userInfo={
      name:user,
      lang:["Java","Koltin","JavaScript","Node JS","Python"],
    }
    res.render("user",{userInfo});
});
app.get("/",filterURL,(req,res)=>{
    if(req.query.user)
    res.send(`Welcome to ${req.query.user}`);
    else {
      res.send(`Welcome to ${res.locals.user}`);
    }
});
app.get("/file",filterURL,(req,res)=>{
   if(req.query.user){
   var fdata;
   fdata=fs.readFileSync(__dirname+"/index.js");
   res.send(`<pre>${fdata}</pre>`);
   }
   else {
    res.send(`<h1>Login First</h1>`);
   }
});
app.listen(3000,(error)=>{
   if(error){
    console.log(error);
   }
   console.log("Server running on Port: 127.0.0.1:3000");
});