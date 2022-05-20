import { runQuery } from "../mysql_db.js";
import { plaintextPasswordToHash } from "../services/passwordsServices.js";

export const getHashedUsernamesAndPasswords = async () => {
  const result = await runQuery(`SELECT * FROM passwords`);
  return result;
};

export const addUsernameAndPassword = async (reqBody) => {
  const result = await runQuery(
    `INSERT INTO passwords (username, password) VALUES ("${plaintextPasswordToHash(
      reqBody.username
    )}","${plaintextPasswordToHash(reqBody.password)}")`
  );
  return result;
};
