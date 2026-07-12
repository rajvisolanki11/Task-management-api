const db = require("../config/db");

const getAllTasks = (callback) => {

    const sql = "SELECT * FROM tasks";

    db.query(sql, callback);

};

const createTask = (task, callback) => {

    const sql = `
        INSERT INTO tasks (title, description, status, priority, due_date)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            task.title,
            task.description,
            task.status,
            task.priority,
            task.due_date
        ],
        callback
    );
};

const getTaskById = (id, callback) => {

    const sql = `
        SELECT * FROM tasks
        WHERE task_id = ?
    `;

    db.query(sql, [id], callback);

};

const updateTask = (id, task, callback) => {

    const sql = `
        UPDATE tasks
        SET
            title = ?,
            description = ?,
            status = ?,
            priority = ?,
            due_date = ?
        WHERE task_id = ?
    `;

    db.query(
        sql,
        [
            task.title,
            task.description,
            task.status,
            task.priority,
            task.due_date,
            id
        ],
        callback
    );

};

const deleteTask = (id, callback) => {

    const sql = `
        DELETE FROM tasks
        WHERE task_id = ?
    `;

    db.query(sql, [id], callback);

};

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};