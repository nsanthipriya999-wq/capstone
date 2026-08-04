module.exports = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admin only."
    });
  }

  next();
};
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Please login first."
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admin only."
    });
  }

  next();
};


const express = require("express");
const router = express.Router();

const {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService
} = require("../controllers/serviceController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");


// Admin service management

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  createService
);


router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateService
);


router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteService
);


// Public/user can view services later
router.get("/", getServices);

router.get("/:id", getServiceById);


module.exports = router;