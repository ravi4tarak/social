import express from "express";
import { getLikes, addLike, deleteLike } from "../controllers/likes.js";

const route=express.Router();

route.get("/",getLikes);
route.post("/",addLike);
route.delete("/",deleteLike);

export default route;