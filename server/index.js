const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const surveyRoutes = require("./routes/survey");
const Blogs = require("./routes/PostB");
const delet = require("./routes/postB");
// const Check = require("./routes/survey.js");
const mongoose = require("mongoose");
// const blogsCrud = require("./routes/PostB")

// database connection
const mongoUri = "mongodb://localhost/test";

mongoose.connect(
  mongoUri,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("db connected");
  }
);
// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/api/delete", delet);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/survey", surveyRoutes);
app.use("/api/PostBlogs", Blogs);
const port = 3000;
app.listen(
  port,
  console.log("Listening on port", "http://localhost:3000", port)
);
