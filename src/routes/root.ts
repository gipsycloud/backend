import express from "express";
import todoRouter from "../todo/route";
import userRouter from "../user/route";

const router = express.Router()

router.use("/todo", todoRouter)
router.use("/users", userRouter)

export default router
