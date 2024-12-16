import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Use the PORT environment variable or default to 3000
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
