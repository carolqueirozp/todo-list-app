const mongoose = require('mongoose')

//Garante que a API de Promise do mongoose utilize a API do Node
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todolist')

