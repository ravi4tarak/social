import express from "express";
import {getComments, addComment} from "../controllers/comments.js";

const route=express.Router();

route.get("/",getComments);
route.post("/",addComment);


export default route;