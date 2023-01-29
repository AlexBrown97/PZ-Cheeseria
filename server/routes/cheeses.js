import express from "express";
import { createCheese } from "../server";
const router = express.Router();

router.post("/cheese", createCheese);

export default router;
