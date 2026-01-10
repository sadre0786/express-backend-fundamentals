import express from "express"
const router = express.Router();

/*
  Version 2 Users API
  Improved response structure
*/

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        users: [
            { id: 1, name: "Sadre", role: "developer" }
        ],
        meta: {
            count: 1
        }
    });
});

export default router