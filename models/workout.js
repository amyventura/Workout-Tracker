const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Required"
    },

    name: {
        type: String,
        trim: true,
        required: "Required"
    },

    duration: {
        type: Number,
        trim: true,
        required: "Required"
    },
    
    weight: {
        type: Number,
        trim: true,
        required: "Required"
    },

    reps: {
        type: Number,
        trim: true,
        required: "Required"
    },

    sets: {
        type: Number,
        trim: true,
        required: "Required"
    }, 

    distance: {
        type: Number,
        trim: true,
        required: "Required"
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;