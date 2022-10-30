const mongoose = require("mongoose")


const adminSchema = new mongoose.Schema({
    id: String,
    yes: String
})

const Word = mongoose.model("Word",wordSchema)
module.exports = Word