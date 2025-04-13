const mongoose = require("mongoose");

// 1. Định nghĩa Schema
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean,
});

// 2. Tạo Model sử dụng Schema đã định nghĩa
const Product = mongoose.model("Product", productSchema, "products"); // "products" là tên collection (tùy chọn)
module.exports=Product;