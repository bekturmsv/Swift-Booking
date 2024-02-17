import express from "express";
import { registerUser } from "../controllers/auth.controller";
import { check } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is requried").isEmail(),
    check(
      "password",
      "Password with 6 hours or more characters required"
    ).isLength({ min: 6 }),
  ],
  registerUser
);

export default router;
