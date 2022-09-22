import express from "express";
import companyController from "../controllers/company-controller";

const router = express.Router();

router.get("/details", companyController.companyDetails);
router.put("/logo", companyController.updateCompanyLogo);

module.exports = router;
