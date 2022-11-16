// DEPENDENCIES
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/Auth");
const usersRoute = require("./routes/Users");
const postsRoute = require("./routes/Posts");
const categoryRoute = require("./routes/Categories");
require("dotenv").config();

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB CONNECTION
mongoose.connect(process.env.DB);
mongoose.connection.once("open", () => {
  console.log("connected to mongomango");
});

// ROUTES
app.use("/auth", authRoute);
app.use("/user", usersRoute);
app.use("/post", postsRoute);
app.use("/categories", categoryRoute);

// PORT
app.listen(process.env.PORT || 5005, () => {
  console.log("Connected to Port");
});
