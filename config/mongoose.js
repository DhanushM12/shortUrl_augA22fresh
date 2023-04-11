const mongoose = require("mongoose")

mongoose.set('strictQuery', false)

mongoose.connect("mongodb://0.0.0.0:27017/urlshort_aug22fresh")

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection problem"))

db.on("open", function(){
    console.log("Connected to Mongo DB successfully")
})

module.exports = db;
