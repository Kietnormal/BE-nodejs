const Productsrouter=require("./products.route")
const Homerouter=require("./home.route")

module.exports = (app) => {
  app.use("/",Homerouter);

  app.use("/products", Productsrouter);
};
