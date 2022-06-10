import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.js";
import { auth } from "express-oauth2-jwt-bearer";

const app = express();
app.use(cors());

// create middleware for checking the JWT
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
});

app.use("/", checkJwt, indexRouter);
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️Server is running at https://localhost:${PORT}`);
});
