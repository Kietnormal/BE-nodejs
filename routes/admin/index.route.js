// const Productsrouter=require("./products.route")
const Dashboardrouter=require("./dashboard.route")
const productdrouter=require("./product.route")
const systemConfig=require("../../configs/system")
module.exports = (app) => {
  const path_admin=systemConfig.prefixAdmin
  
  app.use(path_admin+"/dashboard",Dashboardrouter);
  app.use(path_admin+"/products",productdrouter);

  
};
