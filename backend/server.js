import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

// creating server
const app = express();

// connecting to the database

// MongoDB connection
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
    // Start the server after successfully connecting to the database
    app.listen(process.env.PORT, () => {
      console.log("Port is listening at-", process.env.PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:".red, error);
  });
