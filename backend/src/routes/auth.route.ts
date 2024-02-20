import express from "express";
import { check } from "express-validator";
import { registerUser, loginUser } from "../controllers/auth.controller";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required ").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  loginUser
);

router.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is requried").isEmail(),
    check("password", "Password with 6  or more characters required").isLength({
      min: 6,
    }),
  ],
  registerUser
);

export default router;
