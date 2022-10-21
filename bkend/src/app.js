const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect('mongodb://127.0.0.1:27017/TPdatabase', {useNewUrlParser: true}) 

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    product: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        trim: true
    }
})
// userSchema.createIndex({ phone: 5 }, { unique: false})

const User = mongoose.model('users',userSchema )

module.exports = User


