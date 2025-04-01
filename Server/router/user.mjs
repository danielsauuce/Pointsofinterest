import { Router } from "express";
import db from "../db.mjs";

const userRouter = Router();

userRouter.post("/register", (req, res) => {
  try {
    if (!req.body.username == "" || !req.body.password == "") {
      return res.status(400).json({ error: "All field must be filled" });
    }

    const checkpoi_user = db.prepare(
      "SELECT * FROM poi_users WHERE username = ?"
    );

    const checkifexisted = checkpoi_user.get(req.body.username);

    if (checkifexisted) {
      return res.status(400).json({ error: "Username already existed" });
    }

    const query = db.prepare(
      "INSERT INTO poi_users (username, password) VALUES (?, ?)"
    );

    const results = query.run(req.body.username, req.body.password);

    if (results.changes == 1) {
      return res.status(200).json({ success: "Signup Successfully" });
    } else {
      return res.status(400).json({ error: "Unable to Signup" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "") {
      return res.status(400).json({ error: "All fields must be filed!" });
    }

    const checkuser = db.prepare(
      "SELECT username, password FROM poi_users WHERE username = ? AND password = ?"
    );
    const ifuserexist = checkuser.get(req.body.username, req.body.password);

    if (!ifuserexist) {
      return res
        .status(400)
        .json({ error: "Username or Password not found, Please register!" });
    } else {
      req.session.username = req.body.username;
      res.status(200).json({ message: "Logged in successfully." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

userRouter.post("/logout", (req, res) => {});

export default userRouter;
