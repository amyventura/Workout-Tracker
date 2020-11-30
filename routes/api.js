const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({
    body
}, res) => {
    const workout = new Workout(body);

    Workout.create(workout)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// router.put("/api/workouts/:id", (req, res) => {
    // updating workout
    // Workout.update({
            // _id: mongojs.ObjectId(req.params.id)
        // }, { $set: {
//                 "distance": req.body.distance,
//                 "duration": req.body.duration,
//                 "weight": req.body.weight,
//                 "sets": req.body.sets,
//                 "reps": req.body.reps
//             }
//         })
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

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

// router.get("/api/workouts/range", (req, res) => {

// });

// router.delete("/api/workouts", (req, res) => {
//     Workout.remove(
//         {
//             _id: mongojs.ObjectId(req.params.id)
//         })
//         .then(dbWorkouts => {
//             res.json(dbWorkouts);
//         })
//         .catch(err => {
//             res.json(err);
//         })
// });

module.exports = router;