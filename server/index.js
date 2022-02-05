const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const blogsCrud = require("./routes/PostB")

// database connection
connection();
// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/PostBlogs", blogsCrud)

const port =  3000;
app.listen(port, console.log("Listening on port","http://localhost:3000",port));