import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.js";
import basicAuth from "express-basic-auth";
import { myAsyncAuthorizer, getUnauthorizedResponse } from "./services/passwordsServices.js";

const app = express();
app.use(cors());

app.use(
  basicAuth({
    authorizer: myAsyncAuthorizer,
    unauthorizedResponse: getUnauthorizedResponse,
    authorizeAsync: true,
    challenge: true,
  })
);

app.use("/", indexRouter);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️Server is running at https://localhost:${PORT}`);
});
