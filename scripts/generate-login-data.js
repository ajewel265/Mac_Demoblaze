const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const csvPath = path.join(__dirname, '../test-data/SawgLab/loginData.csv');
const xlsxPath = path.join(__dirname, '../test-data/SawgLab/loginData.xlsx');

const csvText = fs.readFileSync(csvPath, 'utf8');
const rows = csvText
  .trim()
  .split(/\r?\n/)
  .map((line) => line.split(','));

const worksheet = XLSX.utils.aoa_to_sheet(rows);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'LoginData');
XLSX.writeFile(workbook, xlsxPath);

console.log(`Generated Excel workbook: ${xlsxPath}`);
console.log(`Sheet names: ${XLSX.readFile(xlsxPath).SheetNames.join(', ')}`);
