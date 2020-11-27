const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {

});

router.put("/api/workouts/:id", (req, res) => {

});

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err =>{
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {

});

router.delete("/api/workouts", (req, res) => {

});

module.exports = router;