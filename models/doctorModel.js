const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
  },
  qualification: {
    type: String,
    required: [true, "Qualification is Required"],
    trim: true,
  },
  expert: {
    type: String,
    required: [true, "Expert is Required"],
    trim: true,
  },
  experience: {
    type: String,
    required: [true, "Experience is Required"],
    trim: true,
  },
  currentlyWorkingIn: {
    type: String,
    required: [true, "currentlyWorkingIn is Required"],
    trim: true,
  },
  
});
module.exports = mongoose.model("Doctor", doctorSchema);
