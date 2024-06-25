import { banks, branches } from "../loadData.js";

export const getBanks = (req, res) => {
  const bankList = Array.from(banks.values());
  res.json(bankList);
};

export const getBranchDetails = (req, res) => {
  const { branchId } = req.params;
  const branch = branches.find((b) => b.ifsc === branchId);
  if (!branch) {
    return res.status(404).json({ message: "Branch not found" });
  }
  res.json(branch);
};
