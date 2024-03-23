const express=require('express');
const app=express();
app.get("/",(res,rep)=>{
    rep.send("<h1>Welcome to ExpressJS Web Server in NodeJS</h1>");
});
app.get("/about",(res,rep)=>{
    rep.send("<h1>Dr. Vipin Classes</h1>");
});
app.listen(process.env.port||3000,(error)=>{
  if(error){
    console.log(error);
  }
  console.log("Express JS Server is Running on 127.0.0.1:3000");
})
