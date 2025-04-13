const express = require('express')
const router =express.Router();
const controller=require("../../controllers/client/home/home.controller")
router.get("/", controller.index);

  //router=express
  module.exports=router;