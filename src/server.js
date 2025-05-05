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

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use("/", routers);

const service = app.listen(process.env.PORT, () => {
    console.log(`Server Startado na Porta ${service.address().port}`);
})