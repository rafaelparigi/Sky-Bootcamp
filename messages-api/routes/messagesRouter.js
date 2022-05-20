import express from "express";
import {
  getMessages,
  getMessage,
  addMessage,
  editMessage,
  deleteMessage,
} from "../controller/messagesController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send(await getMessages());
});
router.get("/:idRequest", async (req, res) => {
  res.status(200).send(await getMessage(req.params.idRequest));
});
router.post("/", async (req, res) => {
  res.status(201).send(await addMessage(req.body));
});
router.put("/:idRequest", async (req, res) => {
  console.log("oooooo", await editMessage(req.params.idRequest, req.body.message));
  await editMessage(req.params.idRequest, req.body.message);
  res.status(200).send({ id: req.params.idRequest, message: req.body.message });
});
router.delete("/:idRequest", async (req, res) => {
  await deleteMessage(req.params.idRequest);
  res.status(200).send(`deleted message id: ${req.params.idRequest}`);
});

export default router;
