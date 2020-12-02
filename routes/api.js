const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    // updating workout
    Workout.findByIdAndUpdate(
            params.id, {
                $push: {
                    exercises: body
                }
            }, {
                new: true,
                runValidators: true
            }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    // console.log("hi");
    Workout.find({})
        .then(dbWorkouts => {
            // console.log(dbWorkouts);
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    // get all workout data for the week
    Workout.find({}).limit(7)
    .then(dbWorkouts => {
        // console.log(dbWorkouts);
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;