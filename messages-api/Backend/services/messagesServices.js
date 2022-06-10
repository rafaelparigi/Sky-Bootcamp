export const messagesArrayToStrings = (result) => {
  const messages = result.map((message) => message.message);
  return messages;
};
