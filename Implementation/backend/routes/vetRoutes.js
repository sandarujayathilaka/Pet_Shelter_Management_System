const express = require("express");
const router = express.Router();
const {
  registerPet,
  profileUpdate,
  getProfile,
  deleteProfile,
  getallprofile,
  Qr,
  shelterpets,
  bookedmarkStatusUpdate
} = require("../controller/petProfileController");
const { protect } = require("../middleware/authMiddleware");

router.post("/addpet", registerPet);
router.put("/updateprofile/:id", profileUpdate);
router.put("/bookedmarkStatusUpdate/:id", bookedmarkStatusUpdate);
router.get("/profile/:profileId",protect, getProfile);
router.delete("/deleteprofile/:id", deleteProfile);
router.get("/getallprofile", getallprofile);

// router.get('/pets/qrcode/:id',Qr)
// router.get('/spets',shelterpets)
module.exports = router;
