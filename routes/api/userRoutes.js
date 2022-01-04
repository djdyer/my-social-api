const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route("/:userId/thoughts").post(addThought);

// /api/users/:userId/thoughts/:thoughtId
router.route("/:userId/assignments/:thoughtId").delete(removeThought);

module.exports = router;

// ### API Routes

// **`/api/users`**

// - `GET` all users

// - `GET` a single user by its `_id` and populated thought and friend data

// - `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// - `PUT` to update a user by its `_id`

// - `DELETE` to remove user by its `_id`

// **BONUS**: Remove a user's associated thoughts when deleted.

// ---

// **`/api/users/:userId/friends/:friendId`**

// - `POST` to add a new friend to a user's friend list

// - `DELETE` to remove a friend from a user's friend list

// ---
