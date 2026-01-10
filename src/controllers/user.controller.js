/*
  User Controller
  Handles request and response only
  No business logic, no DB for now (dummy data)
*/

// GET /users
export function getAllUsers(req, res) {
    res.status(200).json({
        success: true,
        data: []
    });
}

// GET /users/:id
export function getUserById(req, res) {
    res.status(200).json({
        success: true,
        data: {
            id: req.params.id
        }
    });
}

// POST /users
export function createUser(req, res) {
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: req.body
    });
}

// DELETE /users/:id
export function deleteUser(req, res) {
    res.status(200).json({
        success: true,
        message: `User with id ${req.params.id} deleted`
    });
}

