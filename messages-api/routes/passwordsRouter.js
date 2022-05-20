import express from "express";
import {
  getHashedUsernamesAndPasswords,
  addUsernameAndPassword,
} from "../controller/passwordsController.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).send(await getHashedUsernamesAndPasswords());
});
// router.get("/:idRequest", async (req, res) => {
//   res.status(200).send(await getMessage(req.params.idRequest, req.body, res));
// });
router.post("/", async (req, res) => {
  res.status(201).send(await addUsernameAndPassword(req.body));
});

export default router;
