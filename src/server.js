import app from "./app.js";
// import app from "../src/middleware/app.js"
// Importing the Express app instance
// IMPORTANT: .js extension is mandatory in ESM

// Defining port number
// In real projects, this should come from process.env.PORT
const PORT = 3000;

// Starting the HTTP server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    // Server is now listening for incoming requests
});
