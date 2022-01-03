const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: "Unnamed thought",
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;

//   - Set default value to the current timestamp
//   - Use a getter method to format the timestamp on query

// - `reactions` (These are like replies)
//   - Array of nested documents created with the `reactionSchema`

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
