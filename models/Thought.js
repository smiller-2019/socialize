const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      trim: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
