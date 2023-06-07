const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const userRoute = require("./routes/users");

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then(console.log("connected to MongoDB")).catch((err)=> console.log(err));

app.use(express.json());
app.use(helmet());

app.use("/api/users", userRoute);

app.listen(3300, ()=>{
    console.log("listening");
})