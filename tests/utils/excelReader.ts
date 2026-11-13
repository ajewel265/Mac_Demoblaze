import * as XLSX from 'xlsx';
import path from 'path'

// Create and export a function that accepts the file path and worksheet name
export function readExcel(filePath: string, sheetName: string) {

    // Convert the file path to an absolute path
    const fullPath = path.resolve(filePath); 
    console.log('Full path is', fullPath);

    const workbook = XLSX.readFile(fullPath); // Read and load the Excel workbook
    const sheet = workbook.Sheets[sheetName]; // Select the worksheet by its name
    const data = XLSX.utils.sheet_to_json(sheet); 
    // Convert worksheet rows into an array of objects

    return data; // Return the extracted Excel data to the caller
}