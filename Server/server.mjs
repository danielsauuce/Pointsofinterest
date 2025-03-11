import express from "express";
import ViteExpress from "vite-express";

const app = express();
app.use(express.json());

const PORT = 3000;

import Database from "better-sqlite3";
const db = Database("pointsofinterest.db");

// To get POI by region
app.get("/poi/:region", (req, res) => {
  try {
    if (req.params.region == "") {
      return res.status(400).json({ error: "Field must be filled" });
    }

    const query = db.prepare("SELECT * FROM pointsofinterest WHERE region =?");

    const results = query.all(req.params.region);

    if (results.length == 0) {
      return res
        .status(404)
        .json({ error: "No point of interest found for the region" });
    } else {
      return res.status(200).json(results);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// To create a new POI
app.post("/poi/newpoi", (req, res) => {
  try {
    if (
      req.body.name == "" ||
      req.body.type == "" ||
      req.body.country == "" ||
      req.body.region == "" ||
      req.body.lon == "" ||
      req.body.lat == "" ||
      req.body.description == "" ||
      req.body.recommendations == ""
    ) {
      return res.status(400).json({ error: "All fields must be field" });
    }

    const query = db.prepare(
      "INSERT INTO pointsofinterest (name, type, country, region, lon, lat, description, recommendations) VALUES(?, ?, ?, ?, ?, ?, ?, ?) "
    );

    const results = query.run(
      req.body.name,
      req.body.type,
      req.body.country,
      req.body.region,
      req.body.lon,
      req.body.lat,
      req.body.description,
      req.body.recommendations
    );
    return res
      .status(200)
      .json({ success: "Point of interest added successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// To increase recommendation by 1
app.put("/poi/:id", (req, res) => {
  try {
    const query = db.prepare(
      "UPDATE pointsofinterest SET recommendations = recommendations +1 WHERE id = ?"
    );

    const results = query.run(req.params.id);

    if (results.changes == 1) {
      return res
        .status(200)
        .json({ success: "Number of recommendation updated" });
    } else {
      return res.status(404).json({ error: "ID not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Register user
app.post("/register", (req, res) => {
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

// Login user
app.post("/login", (req, res) => {
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
      res.status(200).json({ message: "Login Successfully." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

ViteExpress.listen(app, 3000, () => {
  console.log(
    `Express server with Vite integration now running on Port ${PORT}`
  );
});
