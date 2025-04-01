import { Router } from "express";
import db from "../db.mjs";

const poiRouter = Router();

poiRouter.get("/:region", (req, res) => {
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

poiRouter.post("/newpoi", (req, res) => {
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

poiRouter.post("/recommend/:id", (req, res) => {
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

poiRouter.post("/:id/review", (req, res) => {
  try {
  } catch (error) {}
});

export default poiRouter;
