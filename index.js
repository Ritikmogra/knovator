const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')

// Config
  require("dotenv").config({ path: "backend/config/config.env" });
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route Imports
const UserRoute = require('./route/User.Route');
const connectDatabase = require("./utils/database");
const postRoute = require("./route/postRoute");

app.get("/",(req,res)=>{
  res.send("ok")
})
app.use("/api", UserRoute);
app.use("/api", postRoute);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
// app.use(errorMiddleware);

connectDatabase();
const server = app.listen(8700, () => {
  console.log(`Server is working on http://localhost:${3000}`);
});

module.exports = app;
