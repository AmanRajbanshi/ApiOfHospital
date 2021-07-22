const Doctor = require("../models/doctorModel");

module.exports.post_DoctorList = async (req, res) => {
  const { name, qualification, expert, experience, currentlyWorkingIn } =
    req.body;

  if (
    !name ||
    !qualification ||
    !expert ||
    !experience ||
    !currentlyWorkingIn
  ) {
    return res.status(422).json({ error: "field property required" });
  }

  const newDoctor = new Doctor(req.body);
  try {
    const insertDoctor = await newDoctor.save();
    res.status(201).json(insertDoctor);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_DoctorList2 = async (req, res) => {
  const regex = new RegExp(req.params.name, "i");
  try {
    const newregex = await Doctor.find({ name: regex });
    res.status(200).json(newregex);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.get_DoctorList = async (req, res) => {
  try {
    const getDoctor = await Doctor.find({});
    res.json(getDoctor);
  } catch (error) {
    res.status(400).json("something goes wrong");
    console.log(error);
  }
};

module.exports.update_DoctorList = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateDoctor = await Doctor.findByIdAndUpdate({ _id }, req.body);
    res.json(updateDoctor);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_DoctorList = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteDoctor = await Doctor.findByIdAndDelete({ _id });
    res.json(deleteDoctor);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
