import express from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import postRoutes from "./post.routes";
import commentRoutes from "./comments.routes";
import profileRoutes from "./profile.routes"

const router = express.Router();

router.use("/auth", authRoutes);

router.use("/user", userRoutes);

router.use("/post", postRoutes);

router.use("/comment", commentRoutes);

router.use("/profile", profileRoutes)

export default router;
