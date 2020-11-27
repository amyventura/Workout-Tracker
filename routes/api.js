const router = require("express").Router();
const Workout = require("../models/workout");

// router.post("/api/workouts", (req, res) => {
// creating new
// });

// router.put("/api/workouts/:id", (req, res) => {
// updating
// });

router.get("/api/workouts", (req, res) => {
    // console.log("hi");
    Workout.find({})
    .then(dbWorkouts => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
    })
    .catch(err =>{
        res.json(err);
    });
});

// router.get("/api/workouts/range", (req, res) => {

// });

// router.delete("/api/workouts", (req, res) => {
//     Workout.remove()
// });

module.exports = router;