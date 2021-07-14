const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = {
  day: Date,
  exercises: [
    {
      type: Enumerator,
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
};

const workoutSchema = new Schema(workoutSchema);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
