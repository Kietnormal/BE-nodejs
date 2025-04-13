const express = require('express')
const router =express.Router();
const controller=require("../../controllers/admin/dashboard.controller")
router.get("/", controller.dashboard);

  //router=express
  module.exports=router;