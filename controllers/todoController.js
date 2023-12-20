const { todoModel } = require('../models/todos');

exports.createTodo = async (req, res) => {
    try {
        const todo = {
            content: req.body.todo
        }

        console.log("creating new Todo: ", todo);

        if (todo != null && todo != undefined) {
            const response = await todoModel.create(todo);
            return res.status(200).json({success: true, message: "Todo Created on Server!!", response: response});
        }
    } catch (err) {
        console.log(err);

        return res.status(500).json({success: false, message: "Somethign went wrong!!"});
    }
}

exports.updateTodo = async (req, res) => {
    try {
        const todo = {
            content: req.body.todo
        }

        if (req.body.status != null && req.body.status != undefined) {
            todo.status = req.body.status;
        }

        const id = req.body.todoId;

        console.log("Updating Todo:with Id: ", id);

        if (id != null && id != undefined) {
            const response = await todoModel.findByIdAndUpdate(id, todo);
            return res.status(200).json({success: true, message: "Todo Updated on Server!!", response: response});
        }
    } catch (err) {
        console.log(err);

        return res.status(500).json({success: false, message: "Somethign went wrong!!"});
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.todoId;

        console.log("Deleting Todo with Id: ", id);

        if (id != null && id != undefined && id.length > 0) {
            const response = await todoModel.findByIdAndDelete(id);
            return res.status(200).json({success: true, message: "Todo Deleted from Server!!", response: response});
        }
    } catch (err) {
        console.log(err);

        return res.status(500).json({success: false, message: "Somethign went wrong!!"});
    }
}

exports.getAllTodo = async (req, res) => {
    try {

        const todos = await todoModel.find().sort({ _id: 'desc' });

        return res.status(200).json({success: true, message: "Received Todos from DB!!", response: todos});
    } catch (err) {
        console.log(err);

        return res.status(500).json({success: false, message: "Somethign went wrong!!"});
    }
}