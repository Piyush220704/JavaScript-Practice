const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/newyear-app")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed: {
        type : Boolean,
        default : false
    },
})

const todo = mongoose.model("todos", todoSchema)
module.exports  = {
    todo
}