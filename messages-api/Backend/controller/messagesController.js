import { runQuery } from "../mysql_db.js";
import { messagesArrayToStrings } from "../services/messagesServices.js";

export const getMessages = async (sent_by) => {
  const result = await runQuery(`SELECT message FROM messages WHERE sent_by = '${sent_by}'`);
  return messagesArrayToStrings(result);
};

export const getMessage = async (idRequest) => {
  const result = await runQuery(`SELECT message FROM messages WHERE id = ${idRequest}`);
  return messagesArrayToStrings(result)[0];
};

export const addMessage = async (newMessage) => {
  const result = await runQuery(`INSERT INTO messages (message) VALUES ("${newMessage.message}")`);
  return result;
};

export const editMessage = async (idRequest, edittedMessage) => {
  const query = `UPDATE messages SET message = '${edittedMessage}' WHERE id = ${idRequest}`;
  const result = await runQuery(query);
  return result;
};

export const deleteMessage = async (idRequest) => {
  const query = `DELETE FROM messages WHERE id = ${idRequest}`;
  const result = await runQuery(query);
  return result;
};
