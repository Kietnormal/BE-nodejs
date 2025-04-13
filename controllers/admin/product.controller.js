const Product = require("../../model/product.model");
const filerStatushelper = require("../../helpers/filerStatus");
const searchHelper=require("../../helpers/search")
module.exports.product = async (req, res) => {
  //bộ lọc

  const filerStatus = filerStatushelper(req.query);
  const find = {
    deleted: "false",
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
 //tìm kiếm
const objectSearch=searchHelper(req.query)
if(objectSearch.regex){
  find.title=objectSearch.regex
}
 

  const product = await Product.find(find);
 
  product.forEach((item) => {
    item.pricenew = (
      (item.price * (100 - item.discountPercentage)) /
      100
    ).toFixed(0);
  });
  console.log(product);

  res.render("admin/pages/product/index", {
    pagetitle: "Trang Product",
    products: product,
    filerStatus: filerStatus,
    keyword: objectSearch.keyword,
  });
  // res.send("trang sản phẩm")
  // res.send('trang admin')
};
