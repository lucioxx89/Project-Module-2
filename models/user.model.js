const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
firstName: {
    type:String,
    required: true,
    },
lastName: {
    type:String,
    required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    hashedPassword: {
        type: String,
        required: [true, 'password is required'],
    },

attendedEvents: {
    //type: [ObjectIds(Event)]
   }

},

{ timestamps: true }

);

module.exports = model('User', userSchema);