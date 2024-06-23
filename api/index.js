import express from "express";
const app=express();
import userRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"
import likesRoutes from "./routes/likes.js"
import commentsRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import relationshipRoutes from "./routes/relationships.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
// middlewares
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next();
})
app.use(express.json()); //otherwise we cant send data in a json format(object)
app.use(cors({
    origin:"http://localhost:3000",
    Credentials:true
})) //nobody should reach our API , only we allow our localhost and if ant other url try to reah our api it returns ERROR
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload'); //  The destination directory for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ file.originalname ); // Setting the filename
    }
  });

const upload =multer({storage : storage})

app.post("/api/upload", upload.single("file"), (req, res)=>{
    const file=req.file;
    res.status(200).json(file.filename);
})

app.use("/api/users", userRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/comments", commentsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/relationships",relationshipRoutes)


app.get("/", (req, res)=>{
    res.send("working");
})
app.listen(8000, (req, res)=>{
    console.log("Server Starts");
})