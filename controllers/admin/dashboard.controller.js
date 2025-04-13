module.exports.dashboard=(req, res) => {
    res.render("admin/pages/dashboard/index",{
      pagetitle:"Trang Admin"
    });
    // res.send('trang admin')
  }