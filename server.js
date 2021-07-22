const express = require("express");
const app = express();
require("./connection/connection");
const port = process.env.PORT || 5000;

app.use(express.json());

//Routes
const firsthospital = require("./routes/hospitalRoute.js");
const doctorRouter = require("./routes/doctorRoute");

//Middlewares
app.use("/", firsthospital);
app.use("/hospital", doctorRouter);

app.listen(port, () =>
  console.log("Congratulation!!! Your server is Running...")
);
