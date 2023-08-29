const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");
const path = require("path")



const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then(console.log("connected to MongoDB")).catch((err)=> console.log(err));

app.use(express.json());
app.use(helmet());

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, "../client/public/assets/post");
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    try {
        const file = req.file;
        return res.status(200).json(file.filename);
    } catch (error) {
        console.log(error);
    }
});

/* app.use("/images", express.static(path.join(__dirname, "publicc/images"))); */

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(3300, ()=>{
    console.log("listening");
})