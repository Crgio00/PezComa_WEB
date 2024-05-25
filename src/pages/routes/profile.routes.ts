import express from "express";
import { Profile } from "../controllers/profile.controller";

const router = express.Router();

router.get("/", Profile);

export default router;