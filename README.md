# Task Management REST API

A RESTful Task Management API built using **Node.js**, **Express.js**, and **MySQL** following the **MVC (Model-View-Controller)** architecture. It provides secure CRUD operations for managing tasks with input validation and SQL injection prevention.

## Features

- Create, Read, Update and Delete (CRUD) tasks
- RESTful API design
- MVC Architecture
- Input & Business Validation
- Parameterized SQL Queries
- Proper HTTP Status Codes

## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- dotenv

## Project Structure

```
Task_management_api/
├── config/
├── controllers/
├── models/
├── routes/
├── validators/
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Installation

```bash
git clone https://github.com/rajvisolanki11/Task-management-api.git
cd Task-management-api
npm install
```

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=task_management
PORT=3000
```

Start the server:

```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get task by ID |
| POST | `/tasks` | Create a task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

## Author

**Rajvi Solanki**