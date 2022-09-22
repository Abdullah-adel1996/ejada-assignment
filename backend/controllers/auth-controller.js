import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import HttpError from "../models/htttp-error";
import { dbContext } from "../services/dbContext";

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let user;
  const sql = "SELECT * FROM users WHERE email = ?";
  const db = new dbContext("common");
  db.connection.all(sql, email, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!rows.length) {
      const error = new HttpError("User not found!", 401);
      return next(error);
    }
    user = rows[0];
    bcrypt.compare(password, user?.password, function (err, match) {
      if (match) {
        const token = jwt.sign(
          {
            userId: user.id,
            companyId: user.company_id,
          },
          "supersecret_dont_share",
          { expiresIn: "1h" }
        );
        return res.status(200).send({ token, isAdmin: user.isAdmin });
      } else {
        const error = new HttpError("Password is incorrect!", 401);
        return next(error);
      }
    });
  });
};

exports.login = login;
