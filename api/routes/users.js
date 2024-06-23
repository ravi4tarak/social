import express from "express";
import { getUser , updateUser} from "../controllers/users.js";

const route=express.Router();

route.get("/find/:userId", getUser);
route.put("/", updateUser);

export default route;