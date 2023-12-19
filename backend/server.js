const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(()=>{
  console.log("MongoDB database connection established successfully");
}).catch((err)=>{
console.log(err);
})

const usersRouter = require("./routes/users");
app.use("/", usersRouter);

app.listen(port, () => {
  console.log("Server is ruunig on port 5000");
});