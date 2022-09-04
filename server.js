// Entry point for our backend

const express = require("express");
const { Server } = require("http");
const { default: mongoose } = require("mongoose");
const nodemon = require("nodemon");

const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

const port = process.env.PORT || 5000;

// console.log(process.env.MONGO_URL); //confrims if env is working correctly.
app.listen(port, () => console.log(`Listening on port ${port}`));

// express mongoose jsonwebtoken dotenv

// express: a back end web application framework for Node.js,
// mongoose: Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js
// jsonwebtoken: is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. ie handling authentication tokens
// dotenv:npm package that automatically loads environment variables from a . env file into the process stores.
// nodemon: packet that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. Has to be installed globally to work: npm i -g nodemon. controls backend Server.

// MongoDB Atlas is a fully-managed cloud database that handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS , Azure, and GCP). MongoDB Atlas is the best way to deploy, run, and scale MongoDB in the cloud.
// To connect Mongodb we connect via MongoDB compass in overview page.

// DotEnv is a lightweight npm package that automatically loads environment variables from a . env file into the process.\

// Environment variables provide information about the environment in which the process is running. We use Node environment variables to handle sensitive data like passwords, which we shouldn't hard code, or configuration details that might change between runs, like what port a server should listen on

// Compass is an interactive tool for querying, optimizing, and analyzing your MongoDB data.
