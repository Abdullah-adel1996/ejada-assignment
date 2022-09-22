import express from "express";
import usersController from "../controllers/users-controller";

const router = express.Router();

router.get("/me", usersController.getUserDetails);

module.exports = router;
