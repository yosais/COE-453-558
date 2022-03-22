const mongoose = require('mongoose')

const database = mongoose.createConnection(
                    'mongodb://localhost:27017/CalcApp'
                   )

database.on('error', () => console.log("Cannot connect to database!") )
 
database.once('open', () => console.log("Connected to database...") )

const Event_Schema = new mongoose.Schema({
    createdOn: {
        type: Date,
        immutable: true,
        required: true,
        default: () => Date.now()
    },
    operation: {
        type: String,
        immutable: true,
        required: true
    },
    numbers: {
        type: [Number],
        immutable: true,
        required: true 
    },
    result: {
        type: Number,
        immutable: true,
        required: true
    }
})

const Event = database.model('Event', Event_Schema)

// 1. Create an event and insert it into the events collection
let ev01 = new Event({
    operation: "+",
    numbers: [2, 3],
    result: 5
})

let ev02 = new Event({
    operation: "-",
    numbers: [2, 3],
    result: -1
})

Event.insertMany([ev01, ev02])
    .then( data => console.log("Data saved: ", data) )
    .catch( err => console.log("Error: ", err) )

// 2. Read events 
let filter1 = {operation: "-"}
Event.find(filter1)
    .then( data => console.log("Data found: ", data) )
    .catch( err => console.log("Error: ", err) )

//3. Update
// It does not make sense to update events. They are actual things that
// happened on the server. Why change them!


// 4. Delete
let filter2 = {operation : "-"}
Event.deleteMany(filter2)
    .then( () => console.log("Deleted") )
    .catch( err => console.log("Error: ", err) )