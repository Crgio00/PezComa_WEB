import express from "express";
import authRoutes from "../Api/Auth/Routes/auth.routes";
import userRoutes from "../Api/User/Routes/user.routes";
import postRoutes from "../Api/Post/Routes/post.routes";
import commentRoutes from "../Api/Commet/Routes/comment.routes";
import fishRoutes from "../Api/Fish/Routes/fish.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/fish", fishRoutes);

export default router;
