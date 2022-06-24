const { get } = require('mongoose')
const mongo = require('../models')

const getTodos = (_, res) => {
  mongo.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).send(err))
}

const addTodo = (req, res) => {
  mongo.Todo.create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => res.status(400).send(err))
}

const getTodo = (req, res) => {
  mongo.Todo.findById(req.params.todoId)
    .then(todo => res.json(todo))
    .catch(err => res.status(400).send(err))
}

const updateTodo = (req, res) => {
  let update = {
    completed: req.body.completed || undefined,
    name: req.body.name || undefined
  }
  mongo.Todo.findOneAndUpdate({ _id: req.params.todoId }, update, { new: true })
    .then(todo => res.json(todo))
    .catch(err => res.status(400).send(err))
}

const deleteTodo = (req, res) => {
  mongo.Todo.remove({ _id: req.params.todoId })
    .then(todo => res.json(todo))
    .catch(err => res.status(400).send(err))
}

module.exports = {
  getTodos: getTodos,
  addTodo: addTodo,
  getTodo: getTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo
}