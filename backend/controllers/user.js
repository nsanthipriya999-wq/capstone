//-------------------Wash n go Controller--------------------------------------------------------
import Todo from '../models/todo.js'

// GET /api/wash
export const getWash = async (req, res) => {
    try {
        const wash = await Todo.find({}).sort({ createdAt: -1 });
        res.status(200).json(wash);
    } catch(e) {
        console.log(e);
        res.status(400).json({ error: e.message })
    }
}

// POST /api/todos
export const createWash = async (req, res) => {
    try {
        console.log(req.body);
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch(e) {
        console.log(e);
        res.status(400).json({ error: e.message })
    }
}

// DELETE /api/todos/:id
export const deleteTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndDelete(req.params.id);
        console.log(result);
        res.status(200).json(result);
    } catch(e) {
        console.log(e);
        res.status(400).json({ error: e.message })
    }
}

// PUT /api/todos/:id
export const updateTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndUpdate(req.params.id, req.body);
        console.log(result);
        res.status(200).json(result);
    } catch(e) {
        console.log(e);
        res.status(400).json({ error: e.message })
    }
}