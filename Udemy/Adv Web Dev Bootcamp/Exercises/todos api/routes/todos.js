let express = require('express')
let router = express.Router();
let helper = require("../helpers/todos")


router.route('/')
    .get(helper.getTodos)
    .post(helper.addTodo)

router.route('/:todoId')
    .get(helper.getTodo)
    .put(helper.updateTodo)
    .delete(helper.deleteTodo)

module.exports = router
