const express = require('express')

module.exports = function (app) {

    //API Router
    const router = express.Router()
    app.use('/api', router)

    //HTTP Router
    const todoService = require('../api/todolist/todoService')
    todoService.register(router, '/todos')
}