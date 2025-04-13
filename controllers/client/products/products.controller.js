const Product = require("../../../model/product.model");

module.exports.products = async (req, res) => {
  const product = await Product.find({
    
    
  status:"active"
  });
  product.forEach(item=>{
    item.pricenew=(item.price*(100-item.
      discountPercentage
      )/100).toFixed(0)
  })
  console.log(product);

  res.render("client/pages/products/index", {
    pagetitle: "trang sản phẩm",
    products:product
  });
};
