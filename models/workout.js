const { Schema, model } = require('mongoose')

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                distance: {
                    type: Number,
                },
                duration: {
                    type: Number,
                    required: "Enter an exdercise duration"
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
})

const Workout = model("Workout", WorkoutSchema)

module.exports = Workout