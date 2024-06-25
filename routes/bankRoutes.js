// bank related Routes

import express from "express";
import { getBanks, getBranchDetails } from "../controllers/bankController.js";

const router = express.Router();

router.get("/banks", getBanks);
router.get("/branches/:branchId", getBranchDetails);

export default router;



