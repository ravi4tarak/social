import express from "express";
import { getPosts, addPost , deletePost} from "../controllers/posts.js";

const route=express.Router();

route.get("/", getPosts);
route.post("/", addPost);
route.delete("/:id", deletePost);

export default route;