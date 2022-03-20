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

// Print stu01; notice ObjectID
console.log(stu01)

// 1. Create (i.e., save) this new student (i.e., document) to the database
stu01.save().then(() => console.log("Saved!"))

// // 2. Read (i.e., find) all students with this ID. Returned in an array
// //Student.find({"id": "9999999999"}).then((doc) => console.log(doc))
// //                                     .catch((err) => console.log(err))

// // 3. Update 
// const filter = {name : "Ali Ahmad"}
// const update = {age : 22}
// Student.findOneAndUpdate(filter, update).then( (doc) => {console.log(doc)} )
// Student.findOne(filter).then( (doc) => {console.log(doc)} ) 

// // 4. Delete all students (documents) with this student id
// //Student.deleteMany({"id": "9999999999"}).then(() => {console.log("Deleted all documents")} )