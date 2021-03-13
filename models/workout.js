const { Schema, model } = require('mongoose')

const WorkoutSchema = new Schema(
    {
        exercises: [
            {
                name: String,

                weight: Number,

                reps: Number,

                duration: Number
            }
        ]
    }
)

const Workout = model("Workout", WorkoutSchema)

module.exports = Workout