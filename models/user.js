const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      unique: true,
      // { $trim: { input: <string>,  chars: <string> } },
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: "thoughts",
    },
  },
  {
    toJSON: {
      // virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
userSchema
  .virtual("friendCount")

  // Getter
  .get(function () {
    // return `${this.first} ${this.last}`;
  });

// Setter to set the first and last name
// .set(function (v) {
//   const first = v.split(' ')[0];
//   const last = v.split(' ')[1];
//   this.set({ first, last });
// });

friendCount.length;

// Initialize our User model
// const User = model("user", userSchema);

module.exports = userSchema;

// - `thoughts`
// - Array of `_id` values referencing the `Thought` model

// - `friends`
// - Array of `_id` values referencing the `User` model (self-reference)
// ref: user model
