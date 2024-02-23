const mongoose = require("mongoose");

const connectDatabase = () => {//mongodb+srv://punitsnz:<password>@cluster0.fkexuiu.mongodb.net/?retryWrites=true&w=majority
  mongoose
    .connect('mongodb://localhost:27017/invoiceDb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
