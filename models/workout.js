const { Schema, model } = require('mongoose')

const WorkoutSchema = new Schema(
    {
        exercises: [
            {
                name: String,

                distance: Number,

                duration: Number,

                weight: Number,

                sets: Number,

                reps: Number,
            }
        ]
    }
)

const Workout = model("Workout", WorkoutSchema)

module.exports = Workout