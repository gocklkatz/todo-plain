import http from "http";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  //res.statusCode = 404;
  //
  //res.writeHead(500, { 'Content-Type': 'application/json' });
  //res.write(JSON.stringify({ message: 'Server Error' }));

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "Hello from the backend!" }));
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
