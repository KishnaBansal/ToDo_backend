const todoServices = require('../services/todoServices');

exports.createTodo = async (req,res,next) => {
    try {
        const {userId, title, desc} = req.body;
        let todo = await todoServices.createTodo(userId, title, desc);
        res.json({status: true, success: todo});
    }
    catch (err) {
        next(err);
    }
}

exports.getUserTodo = async (req,res,next) => {
    try {
        const {userId} = req.body;
        let todoData = await todoServices.getTodoData(userId);
        res.json({status: true, success: todoData});
    }
    catch (err) {
        next(err);
    }
}

exports.deleteTodo = async (req,res,next) => {
    try {
        const {id} = req.body;
        let deletedTodo = await todoServices.deleteTodo(id);
        res.json({status: true, success: deletedTodo});
    }
    catch (err) {
        next(err);
    }
}