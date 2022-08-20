const express = require("express")
const router = express.Router()
const Todo = require("./models/ToDo")

router.get("/todos", async (req, res) => {
    const todos = await Todo.find()
    res.send(todos)
})

router.post("/todos", async (req, res) => {
    if (!req.body.task) {
        res.status(400).send({
            message: "You should provide a name for a task"
        });
    }

    const todo = new Todo({
        task: req.body.task,
        description: req.body.description,
        done: false
    })

    await todo.save()

    res.send(todo)
})

router.put("/todos/:id", async (req, res) => {
    var id = req.params.id;

    if (!req.body.task && !req.body.done) {
        res.status(400).send({
            message: "Invalid data"
        })
    }

    const toBeUpdated = await Todo.findById(id)

    if (toBeUpdated != null) {
        toBeUpdated.task = req.body.task,
            toBeUpdated.description = req.body.description,
            toBeUpdated.done = req.body.done

        await toBeUpdated.save();

        res.send(toBeUpdated)
    }
    else {
        res.status(404).send({
            message: "Not found"
        })
    }
})

router.delete("/todos/:id", async (req, res) => {
    var id = req.params.id;

    const toBeDeleted = await Todo.findById(id)

    if (toBeDeleted != null) {
        await toBeDeleted.delete()

        res.status(200).send();
    } else {
        res.status(404).send({
            message: "Not found"
        });
    }
})

router.get("/todos/:id", async (req, res) => {
    var id = req.params.id;

    const byId = await Todo.findById(id)

    if (byId != null) {
        res.send(byId);

    } else {
        res.status(404).send({
            message: "Not found"
        });
    }
})

module.exports = router
