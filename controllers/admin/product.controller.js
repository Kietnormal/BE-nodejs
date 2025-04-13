const Product = require("../../model/product.model");
module.exports.product = async (req, res) => {
  let filerStatus = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: "",
    },
  ];
  const find = {
    deleted: "false",
  };
  if (req.query.status) {
    const index=filerStatus.findIndex(item=>item.status==req.query.status)
    filerStatus[index].class='active'
   
   
  } else {
   
     const index=filerStatus.findIndex(item=>item.status=="")
    filerStatus[index].class='active'
   
  }
  if (req.query.status) {
    find.status = req.query.status;
  }
  let keyword='';
  if (req.query.keyword){
    keyword=req.query.keyword;
    find.title = keyword;
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
    keyword:keyword
  });
  // res.send("trang sản phẩm")
  // res.send('trang admin')
};
