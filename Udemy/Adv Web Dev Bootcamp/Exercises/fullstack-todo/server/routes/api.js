const express = require('express')
const router = express.Router();
const helper = require('../helpers/api')

router.route('/')
  .get(helper.getTodos)
  .post(helper.addTodo)

router.route('/:todoId')
  .get(helper.getTodo)
  .put(helper.updateTodo)
  .delete(helper.deleteTodo)

module.exports = router
