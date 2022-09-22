import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import authRoutes from "./routes/auth-routes";
import usersRoutes from "./routes/users-routes";
import companyRoutes from "./routes/company-routes";
import HttpError from "./models/htttp-error";
import authenticateToken from "./middlewares/auth.middleware";
const PORT = 8080;

const app = express({ limit: "50mb" });
app.use(cors());
app.options("*", cors());

app.set("port", PORT);
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api/auth", authRoutes);
app.use("/api/users", authenticateToken, usersRoutes);
app.use("/api/company", authenticateToken, companyRoutes);

app.use(() => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(PORT, () => {
  console.log(`Express server started at port: ${PORT}`);
});
