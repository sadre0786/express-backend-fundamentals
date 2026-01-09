import express from "express"
const router = express.Router();
/*
  Import controller functions
*/
import {getAllUsers,getUserById,createUser,deleteUser} from "../controllers/user.controller";


/*
  RESTful routes for users resource
*/

// GET all users
router.get("/", getAllUsers);

// GET single user by id
router.get("/:id", getUserById);

// CREATE user
router.post("/", createUser);

// DELETE user by id
router.delete("/:id", deleteUser);

export default router