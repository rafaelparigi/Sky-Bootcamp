import mysql from "mysql";
import "dotenv/config";

const connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  database: process.env.SQL_DB,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

export const runQuery = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const stringResult = JSON.stringify(result); // first transform the return value(RowDataPacket object) into string
        const jsonResult = JSON.parse(stringResult); //then convert this string into the json object
        resolve(jsonResult);
      }
    });
  });
};
