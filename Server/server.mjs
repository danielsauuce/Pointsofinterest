import express from "express";
import ViteExpress from "vite-express";

const app = express();
app.use(express.json());

const PORT = 3000;

import Database from "better-sqlite3";
const db = Database("pointsofinterest.db");

//API to get POI by region
app.get("/poi/:region", (req, res) => {
  try {
    if (req.params.region == "") {
      res.status(400).json({ error: "Field must be filled" });
    }

    const query = db.prepare("SELECT * FROM pointsofinterest WHERE region =?");

    const results = query.all(req.params.region);

    if (results.length == 0) {
      res
        .status(404)
        .json({ error: "No point of interest found for the region" });
    } else {
      res.status(200).json(results);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//API to create a new POI
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
      res.status(400).json({ error: "All fields must be field" });
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
    res.status(200).json({ success: "Point of interest added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//API to increase recommendation by 1
app.put("/poi/:id", (req, res) => {
  try {
    const query = db.prepare(
      "UPDATE pointsofinterest SET recommendations = recommendations +1 WHERE id = ?"
    );

    const results = query.run(req.params.id);

    if (results.changes == 1) {
      res.status(200).json({ success: "Number of recommendation updated" });
    } else {
      res.status(404).json({ error: "ID not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

ViteExpress.listen(app, 3000, () => {
  console.log("Express server with Vite integration now running");
});
