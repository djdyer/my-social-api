const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// getting all users / creating a user
router.route("/").get(getUsers).post(createUser);

// get a single user / delete a user / update a user by id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);
// BONUS: Remove a user's associated thoughts when deleted.

// Add a friend to user
router.route("/:userId/friends/:friendId").post(addFriend);

// Delete a friend from user
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
