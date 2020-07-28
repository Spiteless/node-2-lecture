const todos = require('../todos.json');
const e = require('express');
let id = 11;

const ctrl = {
    getTodos: (req, res) => {
        res.status(200).send(todos)
    },
    postTodo: (req, res) => {
        console.log(req.body)
        const {userId, title} = req.body
        let newTodo = {
            id: id,
            userId,
            title,
            completed: false,
        }
        todos.push(newTodo)
        id++
        res.status(200).send(todos)
        console.log(newTodo)
    },
    deleteTodo: (req, res) => {
        const indexToDelete = todos.findIndex( elem => elem.id === +req.params.id)
        if ( indexToDelete === -1) {
            res.status(404).send("Couldn't find item")
        } else {
            todos.splice(indexToDelete, 1)
            res.status(200).send(todos)
        }
    },
    completeTodo: (req, res) => {
        const index = todos.findIndex( elem => elem.id === +req.params.id)
        if ( todos[index].completed === true) {
            res.status(405).send("Task has already been marked completed")
        } else {
            todos[index].completed = true
            res.status(200).send(todos)
        }
    },
    updateTodoTitle: (req, res) => {
        const index = todos.findIndex( elem => elem.id === +req.params.id)
        if (index === -1){
            res.sendStatus(404)
        } else {
            todos[index].title = req.body.title
            res.status(200).send(todos)
        }
    },
}

module.exports = ctrl