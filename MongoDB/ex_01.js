// Include the Mongoose library into your code
const mongoose = require('mongoose')

// Connect to MongoDB server and create database KFUPM
mongoose.connect('mongodb://127.0.0.1:27017/KFUPM') 

// Define Student schema
const Student_Schema = new mongoose.Schema({
    name: String,
    id: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 17,
        max: 20,
        default: 18
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})

// Define Student model (i.e., collection of students)
const Student = mongoose.model('Student', Student_Schema)

// Create a new student record (document)
const stu01 = new Student({
    name: "Ali Ahmad",
    id: "9999999999",
    age: 19
})

// Print new document (JSON object)
console.log(stu01)