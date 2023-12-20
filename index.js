const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyparser = require('body-parser');

const todoController = require('./controllers/todoController');

const port = process.env.PORT || 9000;
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'POST,GET,PUT,OPTIONS,DELETE' 
}));

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


// app.route('/api/v1/get-todos').get((req, res) => {
//     res.send({
//         message: "API Called Successfully!!"
//     })
// });

app.get('/api/v1/get-todos', todoController.getAllTodo);
app.post('/api/v1/create-todo', todoController.createTodo);
app.post('/api/v1/update-todo', todoController.updateTodo);
app.delete('/api/v1/delete-todo/:todoId', todoController.deleteTodo);



app.listen(port, () => {
    console.log("Server Started on port: ", port);
});