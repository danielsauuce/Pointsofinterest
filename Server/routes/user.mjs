import { Router } from "express";
import db from "../db.mjs";
import bcrypt from "bcrypt"

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  try {
    const {username, password } = req.body;

    if (username == "" || password == "") {
      return res.status(400).json({ error: "All fields must be filled" });
    }

    const checkpoi_user = db.prepare(
      "SELECT * FROM poi_users WHERE username = ?"
    );
    const checkifexisted = checkpoi_user.get(username);

    if (checkifexisted) {
      return res.status(400).json({ error: "Username already existed" });
    }

    const encPass = await bcrypt.hash(password, 10);

    const query = db.prepare(
      "INSERT INTO poi_users (username, password) VALUES (?, ?)"
    );
    const results = query.run(username, encPass);

    if (results.changes === 1) {
      return res.status(200).json({ success: "Registered Successfully" });
    } else {
      return res.status(400).json({ error: "Unable to Register" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const {username, password} = req.body;

    if (username == "" || password == "") {
      return res.status(400).json({ error: "All fields must be filed!" });
    }

    const checkuser = db.prepare(
      "SELECT username, password FROM poi_users WHERE username = ?"
    );
    const ifuserexist = checkuser.get(username);

    if (!ifuserexist) {
      return res.status(400).json({ error: "Username or Password not found, Please register!" });
    }

    const match = await bcrypt.compare(password, ifuserexist.password);
    
    if(!match) {
      return res.status(401).json({error: "Incorrect password"});
    }

    req.session.username = username;
    
    res.status(200).json({ message: "Logged in successfully." });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

userRouter.get('/login', (req, res) => {
  res.json({username: req.session.username || null} );
});

userRouter.post('/logout', (req, res) => {
  req.session = null;
  res.json({ success: "Logged out"});
});

export default userRouter;
