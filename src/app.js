import express from "express"; 
import userRoutes from "./routes/user.route.js"
import v1UserRoutes from "./routes/v1/user.routes.js"
import v2UserRoutes from "./routes/v2/user.rooutes.js"
// Importing Express framework (ESM syntax)

// Creating an Express application instance
const app = express();
/*
  Body parser middleware
  Required for POST requests
*/
app.use(express.json());

// Global middleware
// This runs on EVERY incoming request before it reaches any route
app.use((req, res, next) => {
    console.log("Express middleware");
    // Always call next(), otherwise request will hang
    next();
});
app.use('/users',userRoutes)
/*
  API Versioning
*/
app.use("/api/v1/users", v1UserRoutes);
app.use("/api/v2/users", v2UserRoutes);
// Root route (GET /)
// This is just a test endpoint to verify server is running
app.get("/", (req, res) => {
    res.send("Express server is running");
});

// Exporting app so it can be used in server.js
// Separation of concerns: app logic ≠ server startup
export default app;
