
// --- --- ---

// *** ES6 module system, native module system in modern JavaScript

// const posts = [
//   {
//     id: 1,
//     content: "Post One",
//   },
//   {
//     id: 2,
//     content: "Post Two",
//   },
// ];

// // v1.1
// //export const getPosts = () => posts;
// // v1.2
// const getPosts = () => posts;
// export { getPosts };

// // v2
// const getPosts = () => posts;
// export default getPosts;

// // v3
// const getPosts = () => posts;
// export const getPostsLength = () => posts.length;
// export default getPosts;

// --- --- ---

// *** CommonJS, native module system in Node.js

// "Default export"
// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }
//
// module.exports = generateRandomNumber;

// "Named export"
// function generateRandomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// function celciusToFahrenheit(celcius) {
//   return celcius * 9 / 5 + 32;
// }

// A named export in CommonJS is created by assigning
//  an object with named properties to module.exports
// module.exports = {
//     generateRandomNumber,
//     celciusToFahrenheit,
// };
