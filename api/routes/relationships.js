import express from "express";
import { getRelationships, addRelationship, deleteRelationship } from "../controllers/relationships.js";

const route=express.Router();

route.get("/",getRelationships);
route.post("/",addRelationship);
route.delete("/",deleteRelationship);

export default route;