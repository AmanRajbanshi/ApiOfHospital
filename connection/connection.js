
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
    process.env.DB_Connection,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
      if (!err) {
        console.log("You are connected to mongodb");
      } else {
        console.log("You are unable to connect... something is wrong in your connection ");
      }
    }
  );
  