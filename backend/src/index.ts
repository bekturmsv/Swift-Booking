import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route";
import authRoutes from "./routes/auth.route";

mongoose
  .connect(process.env.MONGODB_CONNECTION as string)
  .then(() => console.log("DB is connected"));

const app = express();
const PORT = 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use("/api/user");
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
