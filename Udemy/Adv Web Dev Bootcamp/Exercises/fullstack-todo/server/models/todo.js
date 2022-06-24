const mongoose = require('mongoose')
import {nanoid} from 'nanoid'

const todoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => nanoid(10)
  },
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo

