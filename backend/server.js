import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
dotenv.config();


const app = express();
app.use(cors());
// middleware for sending json data to our server
app.use(express.json());
// all API connection
app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute)

// MongoDB connection // creating server
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
