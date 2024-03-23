const express=require("express");
const path=require("path");
const fs=require("fs");
const public=path.join(__dirname,"public");
const app=express();
//app.use(express.static(public));
const reqFilter=(req,res,next)=>{
      if(!req.query.user)
         res.locals.user="Guest";  
        next();
}
app.use(reqFilter);
app.get("/mware",(req,res)=>{
    if (!req.query.user)
    res.send("Welcome to "+res.locals.user);
    else 
    res.send("Welcome to "+req.query.user);

})
app.get("/",(req,res)=>{
    res.sendFile(public+"/index.html");
    
})

app.get("/file",(req,res)=>{
    var fdata;
    fdata=fs.readFileSync(__dirname+"/routing.js");
    res.send("<pre>"+fdata+"</pre>");
})
app.listen(3000,(error)=>{
    if (error){
        console.log(error);
    }
    console.log("Server running at 127.0.0.1:3000");
})