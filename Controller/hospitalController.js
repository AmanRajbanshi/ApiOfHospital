const Hospital = require("../models/hospitalModel");

module.exports.Post_HospitalList = async (req, res) => {
  const newHospital = new Hospital(req.body);
  try {
    const insertHospital = await newHospital.save();
    res.status(201).json(insertHospital);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_HospitalList = async (req, res) => {
  try {
    const getHospital = await Hospital.find({});
    res.json(getHospital);
  } catch (error) {
    res.status(400).json("something goes wrong");
    console.log(error);
  }
};

module.exports.update_HospitalList = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateHospital = await Hospital.findByIdAndUpdate({ _id }, req.body);
    res.json(updateHospital);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_HospitalList = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteHospital = await Hospital.findByIdAndDelete({ _id });
    res.json(deleteHospital);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
