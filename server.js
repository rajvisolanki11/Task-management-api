const express = require("express");
require("dotenv").config();
require("./config/db");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {

    res.status(200).json({
        message: "Task Management API Running"
    });

});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});