const express =require("express");
const student =require("./route/student");
const app =express();
app.use("/student",student);
app.get("/",(req,res)=>{
   res.send("<h1>Home Route</h1>");
});
app.get("/contactus",(req,res)=>{
  res.send("<h2>Dr. Vipin Classes at YoutTube");
});

app.listen(process.env.port||3000,(error)=>{
  if(error){
    console.log(error);
  }
  console.log("Server is running on 127.0.0.1:3000");
});
