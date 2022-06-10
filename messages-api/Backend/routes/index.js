import express from "express";
import messagesRouter from "./messagesRouter.js";
import passwordsRouter from "./passwordsRouter.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/messages", messagesRouter);
router.use("/passwords", passwordsRouter);

export default router;
