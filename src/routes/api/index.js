const { Router } = require("express");
const {
  getLastWorkout,
  updateWorkout,
  createWorkout,
  getAggregatedWorkout,
} = require("../../controllers/api");

const router = Router();

router.get("/workouts", getLastWorkout);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.get("/workouts/range", getAggregatedWorkout);

module.exports = router;
