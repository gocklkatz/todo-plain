import { createServer } from "http";

const PORT = process.env.PORT || 3000;

const tasks = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" }
];

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
}

// Route handler for GET /api/tasks
const getTasksHandler = (req, res) => {
    res.write(JSON.stringify(tasks));
    res.end();
}

// Route handler for GET /api/tasks/:id
const getTaskByIdHandler = (req, res) => {
    const id = req.url.split("/")[3];
    const task = tasks.find(task => task.id === parseInt(id));
    if (task) {
        res.write(JSON.stringify(task));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "Task not found" }));
    }
    res.end();
}

// Route handler for POST /api/tasks
const createTaskHandler = (req, res) => {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        const task = JSON.parse(body);
        tasks.push(task);
        res.write(JSON.stringify(task));
        res.end();
    });
}

// Not found handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === "/api/tasks" && req.method === "GET") {
                getTasksHandler(req, res);
            } else if (req.url.match(/\/api\/tasks\/([0-9]+)/) && req.method === "GET") {
                getTaskByIdHandler(req, res);
            } else if(req.url === "/api/tasks" && req.method === "POST") {
                createTaskHandler(req, res);
            }
            else {
                notFoundHandler(req, res);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});