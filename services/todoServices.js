const todoModel = require('../model/todoModel');

class todoServices {
    static async createTodo(userId, title, desc) {
        const createTodo = new todoModel({userId, title, desc});
        return await createTodo.save();
    }

    static async getTodoData(userId) {
        const todoList = await todoModel.find({userId});
        return todoList;
    }

    static async deleteTodo(id) {
        const deleted = await todoModel.findOneAndDelete({_id: id});
        return deleted;
    }
}


module.exports = todoServices;