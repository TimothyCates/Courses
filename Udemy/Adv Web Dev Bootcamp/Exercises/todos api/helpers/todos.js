let db = require("../models")

exports.getTodos = (req, res) => {
    db.Todo.find()
    .then(todos => {
        res.json(todos)
    })
    .catch(err => {
        res.send(err)
    })
}

exports.addTodo = (req, res) => {
   db.Todo.create(req.body)
    .then((newTodo) => {
        res.status(201).json(newTodo)
    })
    .catch(err => {
        res.status(400).send(err);
    })
}

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then(todo => {
        res.json(todo)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

exports.updateTodo = (req, res) => {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(todo => {
        res.json(todo)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

exports.deleteTodo = (req, res) => {
    db.Todo.remove({_id: req.params.todoId})
    .then(todo => {
        res.json(todo)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}
