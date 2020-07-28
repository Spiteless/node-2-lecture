const express = require('express')
const todos = require('../todos.json')
const ctrl = require('./controller')
const app = express();


app.use(express.json())

const port = 3005

app.get('/api/todos', ctrl.getTodos)

// app.post('/api/todos', ctrl.getTodos)
app.post('/api/todo',  ctrl.postTodo)

app.put('/api/todos', ctrl.getTodos)
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

app.delete('/api/todo/:id', ctrl.deleteTodo)

app.put('/api/todo/complete/:id', ctrl.completeTodo)

app.put('/api/todo/title/:id', ctrl.updateTodoTitle)

app.listen(port, () => console.log(`working on ${port}`))