const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("success"); // Sửa lại chính tả thành "success"
  } catch (error) {
    console.error("Lỗi kết nối MongoDB:", error); // In ra lỗi chi tiết
  }
};