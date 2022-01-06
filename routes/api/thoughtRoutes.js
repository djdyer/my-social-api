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

// get a single thought / update a thought/ delete a thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Add thought to user
router.route("/:userId/thoughts").post(createThought);

// Delete thought from user
router.route("/:userId/thoughts/:thoughtId").delete(deleteThought);
// BONUS: Remove a thought's associated reactions when deleted.

// Add a reaction to thought
router.route("/:thoughtId/reaction/:reactionId").post(addReaction);

// Delete a reaction from thought
router.route("/:thoughtId/reaction/:reactionId").delete(deleteReaction);

module.exports = router;
