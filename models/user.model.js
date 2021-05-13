const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
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
    },
  },

  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
