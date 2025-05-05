const Express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routers =  require("./routers/routersConfig");
require("dotenv").config()

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on("Error", (error) => {
  console.log(`Error: ${error.mensage}`);
});
