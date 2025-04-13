const express = require('express')
const controller=require("../../controllers/client/products/products.controller")
const router =express.Router();
router.get("/",controller.products );
  //router=express
  module.exports=router;