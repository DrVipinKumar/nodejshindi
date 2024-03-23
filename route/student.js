const express =require("express");
const router=express.Router();
router.get("/",(req,res)=>{
  res.send(`Welcome to ${req.query.name} and Address=${req.query.address}`)
});
router.post("/",(req,res)=>{
  res.send("This is post request for students");
});
router.put("/",(req,res)=>{
  res.send("This is put request for students");
});
router.delete("/",(req,res)=>{
  res.send("This is delete request for students");
});

module.exports=router;