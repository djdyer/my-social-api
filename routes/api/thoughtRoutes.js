const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// getting all thoughts / creating a thought
router.route("/").get(getThoughts).post(createThought);
// create the thought first
// find the user by username, or userId and push the thought in there

// example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

// get a single thought / delete a thought
router.route("/:thoughtId").get(getSingleThought).delete(deleteThought);

// - `PUT` to update a thought by its `_id`

// Add thought to user
router.route("/:userId/thoughts").post(addThought);

// Delete thought from user
router.route("/:userId/thoughts/:thoughtId").delete(deleteThought);
// BONUS: Remove a thought's associated reactions when deleted.

// Add a reaction to thought
router.route("/:thoughtId/reaction/:reactionId").post(addReaction);

// Delete a reaction from thought
router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
