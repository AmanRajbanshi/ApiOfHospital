const router = require("express").Router();
const Doctor1 = require("../Controller/doctorController");
const { ROLE } = require("./userRole");
 const { setUser,authUser, authRole  } = require("./basicAuth");

router.post("/doctor", Doctor1.post_DoctorList);
router.get('/doctor',setUser, authUser, authRole(ROLE.ADMIN), Doctor1.get_DoctorList );
 router.get('/search/:name', Doctor1.get_DoctorList2 );
router.patch('/doctor/:id',Doctor1.update_DoctorList);
router.delete('/doctor/:id',Doctor1.delete_DoctorList);


module.exports = router;


  