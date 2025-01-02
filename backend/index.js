import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const PORT = process.env.PORT || 3000;

// --- --- ---

/*
 * Simple router
 */

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {

      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      let filePath = path.join(__dirname, 'public', 'index.html');
      const data = await fs.readFile(filePath, 'utf8');
      res.write(data);

    } else if (req.url === '/tasks') {

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.write(JSON.stringify({ tasks: "Tasks of the backend!" }));

    } else {

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "Not Found" }));

    }
    res.end();
  } else {

    res.setHeader("Content-Type", "application/plain");
    res.statusCode = 405;
    res.write("Method Not Allowed");
    res.end();

  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// /tasks    GET all tasks
// /tasks    POST create a task
// /tasks/1  GET task with id 1

// --- --- ---

// const server = http.createServer((req, res) => {
//   //res.statusCode = 404;
//   //
//   //res.writeHead(500, { 'Content-Type': 'application/json' });
//   //res.write(JSON.stringify({ message: 'Server Error' }));

//   // res.setHeader("Access-Control-Allow-Origin", "*");
//   // res.setHeader(
//   //   "Access-Control-Allow-Methods",
//   //   "GET, POST, PUT, DELETE, OPTIONS"
//   // );
//   // res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   // 
//   console.log(req.url);
//   console.log(req.method);
//   
//   res.setHeader("Content-Type", "application/json");
//   res.write(JSON.stringify({ message: "Hello from the backend!" }));
//   res.end();
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// --- --- ---

// *** ES6 module system, native module system in modern JavaScript

// // v1.*
// import { getPosts } from "./utils.js";
// console.log(getPosts());

// // v2
// import getPosts from "./utils.js";
// console.log(getPosts());

// // v3
// import getPosts, {getPostsLength} from "./utils.js";
// console.log(getPosts());
// console.log(getPostsLength());

// --- --- ---

// *** CommonJS, native module system in Node.js

// "Default export"
// const generateRandomNumber = require('./utils');
// console.log(generateRandomNumber());

// "Named export"
// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');
// console.log(generateRandomNumber());
// console.log(celciusToFahrenheit(10));

// --- --- ---

//global object
// e.g. global.setTimeout(), global.console.log()
//process object
// e.g. process.argv, process.env
//NO WINDOW OBJECT, NO DOCUMENT OBJECT

// --- --- ---

//console.log('Hello from the backend!');
