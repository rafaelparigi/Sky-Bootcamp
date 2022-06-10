// bcrypt is the hashing service
import bcrypt from "bcrypt";
import { getHashedUsernamesAndPasswords } from "../controller/passwordsController.js";
const saltRounds = 10;

export const plaintextPasswordToHash = (myPlaintextPassword) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  return hash;
};

export const isHashRight = (myPlaintextPassword, hash) => {
  return bcrypt.compareSync(myPlaintextPassword, hash);
};

export const myAsyncAuthorizer = async (requestUsername, requestPassword, cb) => {
  let users = await getHashedUsernamesAndPasswords();
  const authUser = users.find((u) => {
    let userMatches = isHashRight(requestUsername, u.username);
    let passwordMatches = isHashRight(requestPassword, u.password);
    return userMatches && passwordMatches;
  });
  if (authUser) {
    return cb(null, true);
  } else {
    return cb(null, false);
  }
};

export const getUnauthorizedResponse = (req) => {
  return req.auth
    ? "Credentials " + req.auth.user + ":" + req.auth.password + " rejected"
    : "No credentials provided";
};
