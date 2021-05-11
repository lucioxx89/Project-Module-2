const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema(
    {
name: {
    type:String,
    required: true
 },

 img: url,

location: {
    type:String,
    required: true
    },
//price: Number,

date: {
    type: Date,
    required: true
    },

category: {
    type: String,
    enum: ["Sport", "Outdoors", "Learning", "Photography", "Tech", "Writing"]
    },

description: {
    type: String,
    required: true
    },

creator: {
    type: ObjectId(User),
    required: true
    }
},

{ timestamps: true }

);

module.exports = model('Event', eventSchema);