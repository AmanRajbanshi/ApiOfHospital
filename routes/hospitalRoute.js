const router = require("express").Router();
const Hospital = require("../Controller/hospitalController");

router.post("/hospital", Hospital.Post_HospitalList);
router.get('/hospital', Hospital.get_HospitalList);
router.patch('/hospital/:id',Hospital.update_HospitalList);
router.delete('/hospital/:id',Hospital.delete_HospitalList);

module.exports = router;
