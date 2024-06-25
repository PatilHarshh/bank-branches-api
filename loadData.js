
// reading csv 
import fs from "fs";
import path from "path";
import csv from "csv-parser";

const banks = new Map();
const branches = [];

export const loadData = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(path.resolve(), "bank_branches.csv"))
      .pipe(csv())
      .on("data", (data) => {
        const bankId = data.bank_id;
        const bankName = data.bank_name;

        if (!banks.has(bankId)) {
          banks.set(bankId, { id: bankId, name: bankName, branches: [] });
        }

        const branch = {
          ifsc: data.ifsc,
          branch: data.branch,
          address: data.address,
          city: data.city,
          district: data.district,
          state: data.state,
          bankId: bankId,
        };

        banks.get(bankId).branches.push(branch);
        branches.push({ ...branch, bank: { id: bankId, name: bankName } });
      })
      .on("end", resolve)
      .on("error", reject);
  });
};

export { banks, branches };
