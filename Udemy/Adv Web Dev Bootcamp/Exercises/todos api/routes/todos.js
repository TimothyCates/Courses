let express = require('express')
let router = express.Router();
let helper = require("../helpers/todos")


router.get('/', helper.getTodos)

router.post('/', helper.addTodo)

router.get('/:todoId', helper.getTodo)

router.put('/:todoId', helper.updateTodo)

router.delete('/:todoId', helper.deleteTodo)

module.exports = router
