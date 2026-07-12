const validateTask = (task) => {

    const {
        title,
        description,
        status,
        priority,
        due_date
    } = task;

    if (!title || !description || !status || !priority || !due_date) {
        return "All fields are required.";
    }

    const validStatuses = [
        "Pending",
        "In Progress",
        "Completed"
    ];

    if (!validStatuses.includes(status)) {
        return "Invalid status.";
    }

    const validPriorities = [
        "Low",
        "Medium",
        "High"
    ];

    if (!validPriorities.includes(priority)) {
        return "Invalid priority.";
    }

    return null;

};

module.exports = validateTask;