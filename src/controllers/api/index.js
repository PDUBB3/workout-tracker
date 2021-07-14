const { Workout } = require("../../models");

const getWorkouts = (req, res) => {};

const updateWorkout = (req, res) => {};

const createWorkout = async (req, res) => {
  try {
    const newWorkout = await Workout.create({});
    return res.json(newWorkout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to create a workout" });
  }
};

const getAggregatedWorkout = (req, res) => {};

module.exports = {
  getWorkouts,
  updateWorkout,
  createWorkout,
  getAggregatedWorkout,
};
