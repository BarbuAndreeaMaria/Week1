const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let toDo = new Schema({
        task: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        done: {
            type: Boolean
        }
    })

module.exports = mongoose.model("Todo", toDo)