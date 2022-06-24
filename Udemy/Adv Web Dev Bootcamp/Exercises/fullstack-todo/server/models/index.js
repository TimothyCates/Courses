const mongoose = require('mongoose')
mongoose.set('debug', true)

mongoose.connect('mongodb://localhost/fullstack-todo')

mongoose.Promise = Promise;

module.exports = {
  Todo: require('./todo')
}
