import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION as string)
  .then(() => console.log("DB is connected"));

const app = express();
const PORT = 7000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Server started succesfully!" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
