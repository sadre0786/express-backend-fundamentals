import express from "express"; 
// Importing Express framework (ESM syntax)

// Creating an Express application instance
const app = express();

// Global middleware
// This runs on EVERY incoming request before it reaches any route
app.use((req, res, next) => {
    console.log("Express middleware");
    // Always call next(), otherwise request will hang
    next();
});

// Root route (GET /)
// This is just a test endpoint to verify server is running
app.get("/", (req, res) => {
    res.send("Express server is running");
});

// Exporting app so it can be used in server.js
// Separation of concerns: app logic ≠ server startup
export default app;
