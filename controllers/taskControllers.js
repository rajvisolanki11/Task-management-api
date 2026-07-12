const taskModel = require("../models/taskModels");
const validateTask = require("../validators/taskValidator");

// GET
const getAllTasks = (req, res) => {

    taskModel.getAllTasks((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

// POST
const createTask = (req, res) => {

    const task = req.body;

    // Validate Task
    const error = validateTask(task);

    if (error) {
        return res.status(400).json({
            message: error
        });
    }

    taskModel.createTask(task, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        res.status(201).json({
            message: "Task created successfully."
        });

    });

};

// GET by ID
const getTaskById = (req, res) => {

    const { id } = req.params;

    taskModel.getTaskById(id, (err, results) => {

        if (err) {

            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });

        }

        if (results.length === 0) {

            return res.status(404).json({
                message: "Task not found."
            });

        }

        res.status(200).json(results[0]);

    });

};

// PUT
const updateTask = (req, res) => {

    const { id } = req.params;

    const task = req.body;

    // Validate Task
    const error = validateTask(task);

    if (error) {
        return res.status(400).json({
            message: error
        });
    }

    taskModel.updateTask(id, task, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Task not found."
            });
        }

        res.status(200).json({
            message: "Task updated successfully."
        });

    });

};

// DELETE
const deleteTask = (req, res) => {

    const { id } = req.params;

    taskModel.deleteTask(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Task not found."
            });
        }

        res.status(200).json({
            message: "Task deleted successfully."
        });

    });

};

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};