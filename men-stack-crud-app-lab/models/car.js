const mongoose = require("mongoose")
const carSchema = new mongoose.Schema({
    manufName: String,
    modelName: String,
    year: Number,
    price: Number,
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car