const Product = require("../../model/product.model");
module.exports.product=async (req, res) => {
    const product=await Product.find({
      deleted:"false"
      
    });
    product.forEach(item=>{
      item.pricenew=(item.price*(100-item.
        discountPercentage
        )/100).toFixed(0)
    })
    console.log(product);
    
    res.render("admin/pages/product/index",{
      pagetitle:"Trang Product",
      products:product
    });
    // res.send("trang sản phẩm")
    // res.send('trang admin')
  }