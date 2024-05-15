const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)
}

module.exports.saveTasks = (req, res) => {
    const {task} = req.body

    TaskModel.create({task})

    .then((data) => {
        console.log("Saved successfully...")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err)
        res.send({error: err, msg: "Something went wrong!"})
    })
}