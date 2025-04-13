const express = require('express')
require('dotenv').config()
const app = express()
const database=require("./configs/database")
database.connect();
const systemConfig=require("./configs/system")
const port = process.env.PORT
app.locals.prefixAdmin=systemConfig.prefixAdmin;
app.set("views","./views");//nhúng pug
app.set("view engine","pug");//nhúng pug
const route =require("./routes/client/index.route") // nhúng routes
const routeadmin =require("./routes/admin/index.route")
routeadmin(app)
route(app);

// app.get('/', (req, res) => {
//   res.render("client/pages/home/index")
  
// })

// app.get('/products', (req, res) => {
//     res.render("client/pages/products/index")
//   })
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
