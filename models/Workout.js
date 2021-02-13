
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },

  exercises: [
    {

      type: {
        type: String,
        trim: true,
        required: "Exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Exercise name"
      },
      duration: {
        type: Number,
        trim: true,
        required:"Time in min"
      },
      weight: {
        type: Number,
        trim: true
      },
      reps: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      }
    }
  ]

});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;


// let workoutSeed = [
//   {
//     day: new Date().setDate(new Date().getDate() - 10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },


//   db.Workout.deleteMany({})
//     .then(() => db.Workout.collection.insertMany(workoutSeed))
//     .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//     .catch(err => {
//       console.error(err);
//       process.exit(1);
//     });
