import express from "express"
const router = express.Router();

/*
  Version 1 Users API
*/

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            { id: 1, name: "Sadre" }
        ]
    });
});

export default router
