import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import path from 'path';

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use("/api/departments", departmentRoutes);

// 👇 Serve public folder
app.use("/public", express.static("public"));

app.get("/api/science-humanities", async (req, res) => {
  const department = await Department.findOne({ slug: "science-humanities" });
  res.json(department);
});
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);




