import sqlite3 from "sqlite3";

export class dbContext {
  constructor(dbName) {
    this.connection = new sqlite3.Database(
      `./db/${dbName}.db`,
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.log("Error Occurred - " + err.message);
        } else {
          console.log("DataBase Connected");
        }
      }
    );
  }
}
