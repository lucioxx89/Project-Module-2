const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: String,

    location: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
    },

    category: {
      type: String,
      enum: ['Sport', 'Music', 'Cinema', 'Outdoors', 'Learning'],
    },

    description: {
      type: String,
      required: true,
    },

    // creator: {
    //     type: ObjectId(User),
    //     required: true
    //     }
  },

  //{ timestamps: true },
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
