const mongoose = require('mongoose');

const ContractSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: 'family'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contract', ContractSchema);
