// main 
import express from "express";
import bankRoutes from "./routes/bankRoutes.js";
import { loadData } from "./loadData.js";

const app = express();

// routes
app.use("/api", bankRoutes);

const PORT = process.env.PORT || 4000;

loadData()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error loading CSV data:", error);
  });
