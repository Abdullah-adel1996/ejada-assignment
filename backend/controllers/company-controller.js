import HttpError from "../models/htttp-error";
import { dbContext } from "../services/dbContext";

const companyDetails = (req, res, next) => {
  const { companyId } = req.user;
  const sql = "SELECT * FROM company_info";
  const db = new dbContext("company" + companyId);
  db.connection.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!rows.length) {
      const error = new HttpError("Company not found!", 401);
      return next(error);
    }
    const company = rows[0];
    return res.status(200).send({ company });
  });
};

const updateCompanyLogo = async (req, res, next) => {
  const { companyId, userId } = req.user;
  const db = new dbContext("company" + companyId);
  const sql = `UPDATE company_info
   SET logo = ?
   WHERE id = ?`;
  const check = await verifyIsAdmin(db, userId);
  if (!check) {
    const error = new HttpError(
      "You are not authorized to perform this action!",
      401
    );
    return next(error);
  }
  db.connection.all(sql, [req.body.logoUrl, req.body.id], (err) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    return res.status(200).send("ok");
  });
};

/**
 
  In this function we return a promise so we can await on it since sqlite3 does not support async/await on thier db connection.

 */

const asyncDB = async (db, query, params) => {
  return new Promise((resolve, reject) => {
    db.connection.all(query, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      if (rows.length) {
        resolve(rows);
      } else {
        return reject(err);
      }
    });
  });
};

const verifyIsAdmin = async (db, userId) => {
  const sql = "SELECT * FROM users WHERE user_id = ? AND is_admin = 1";
  let isAdmin;
  try {
    await asyncDB(db, sql, userId);
    isAdmin = true;
  } catch (error) {
    isAdmin = false;
  }
  return isAdmin;
};

module.exports = { companyDetails, updateCompanyLogo };
