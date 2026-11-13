// Import the Node.js File System (fs) module to read files
import fs from 'fs'

// Import the parse function to convert CSV data into structured records
import { parse } from 'csv-parse/sync'

// Export the readCSV function so other files can import and use it
// filePath is a string containing the location of the CSV file
export function readCSV(filePath: string) {

    // Read the CSV file from the given path
    // The file contents are returned as a Buffer by default
    const fileContent = fs.readFileSync(filePath)

    // Parse the CSV file contents and convert them into records
    const records = parse(fileContent, {

        // Use the first row of the CSV file as column 'headers'
        // Each row becomes an object with header names as property names
        columns: true,
        // Skip completely empty lines in the CSV file
        skip_empty_lines: true
    })
    // Return the parsed records to the code that called readCSV()
    return records
}

