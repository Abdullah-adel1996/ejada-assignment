import HttpError from "../models/htttp-error";
import { dbContext } from "../services/dbContext";

const getUserDetails = (req, res, next) => {
  const { userId, companyId } = req.user;
  const sql = "SELECT * FROM users WHERE user_id =?";
  const db = new dbContext("company" + companyId);
  db.connection.all(sql, userId, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!rows.length) {
      const error = new HttpError("User not found!", 401);
      return next(error);
    }
    const user = rows[0];
    return res.status(200).send({ user });
  });
};

exports.getUserDetails = getUserDetails;
