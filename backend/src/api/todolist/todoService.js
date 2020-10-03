const TodoList = require('./todolist')

TodoList.methods(['get', 'post', 'put', 'delete'])
TodoList.updateOptions({new: true, runValidators: true})

module.exports = TodoList 