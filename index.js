// index.js

// Import required libraries
const { Client } = require('pg');

// Database configuration
const client = new Client({
    user: 'your_username',
    host: 'localhost',
    database: 'employee_tracker',
    password: 'your_password',
    port: 5432, // Default PostgreSQL port
});

// Function to connect to the database
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

// Call the function to connect to the database
connectToDatabase();

// Main application logic can go here
// For example, you can start your CLI application or define other functionalities
