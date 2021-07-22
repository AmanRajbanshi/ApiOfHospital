const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is Required"],
    trim: true,
  },
  
  city: {
    type: String,
    required: [true, "city is Required"],
    trim: true,
  },
  
  district: {
    type: String,
    required: [true, "district is Required"],
    trim: true,
  },
  
  province: {
    type: Number,
    required: [true, "province is Required"],
    trim: true,
  },
  
  website: {
    type: String,
    required: [true, "website is Required"],
    trim: true,
  },
  service: [{
    type: String,
    required: [true, "Service is Required"],
    trim: true,
  }],
}
);
module.exports = mongoose.model("Hospital", hospitalSchema);
