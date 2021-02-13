var db = require('../models');

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) return err;
            else res.json(data);
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}
            // type: req.body.type,
            // name: req.body.name,
            // duration: req.body.duration,
            // weight: req.body.weight,
            // reps: req.body.reps,
            // sets: req.body.sets
            , (err, data) => {
                if (err) return err;
                else res.json(data);
            })
        // res.json({_id:123});
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body}},(err,data)=>{
            if(err) return err;
            else res.json(data);
        })
    });


    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) return err;
            else res.json(data);
        });
    });




















};