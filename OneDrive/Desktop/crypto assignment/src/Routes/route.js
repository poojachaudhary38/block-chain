const express=require('express');
const { getBlockChain } = require('../Controllers/chainController');
const router=express.Router();

router.get("/",(req,res)=>{
    console.log("welcome to my page")
})

router.get("/assets",getBlockChain)

module.exports=router;
