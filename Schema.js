const mongoose = require('mongoose')
const Schema = mongoose.Schema


const expSchema =  new Schema({
    title: String,
    amount: Number,
    date: Date
})

module.exports = mongoose.model("Exp", expSchema);
