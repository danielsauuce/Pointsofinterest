import { Router } from "express";
import db from "../db.mjs";
import Pois from "../dao/dao.mjs";

const poiRouter = Router();
const POIS = new Pois(db);

poiRouter.get("/:region", (req, res) => {
  try {
    if (req.params.region == "") {
      return res.status(400).json({ error: "Field must be filled" });
    }
    const results = POIS.getResultsBYRegion(req.params.region);

    if (results.length == 0) {
      return res.status(404).json({ error: "No point of interest found for the region" });
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

    
    const results = POIS.addNewpoi(
      req.body.name,
      req.body.type,
      req.body.country,
      req.body.region,
      req.body.lon,
      req.body.lat,
      req.body.description,
      req.body.recommendations
    );
    return res.status(200).json({ success: "Point of interest added successfully" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

poiRouter.post("/recommend/:id", (req, res) => {
  try {
    
    const results = POIS.recommendPoiById(req.params.id);

    if (results.changes == 1) {
      return res.status(200).json({ success: "Recommendation updated" });
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
