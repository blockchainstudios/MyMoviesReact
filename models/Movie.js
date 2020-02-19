const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  genre: {
    type: String,
    default: 'Independent'
  },
  dateCreated: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('movie', MovieSchema);
