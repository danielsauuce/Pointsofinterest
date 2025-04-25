import Pois from "../dao/poidao.mjs";

export default class PoiController {
  constructor(db) {
    this.db = db;
    this.dao = new Pois(db);
  }

  getByRegion(req, res) {
    try {
      const { region } = req.params;

      if (!region) {
        return res.status(400).json({ error: "Field must be filled" });
      }

      const results = this.dao.getResultsBYRegion(region);

      if (results.length === 0) {
        return res
          .status(404)
          .json({ error: "No point of interest found for the region" });
      }

      return res.status(200).json(results);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  addNewPoi(req, res) {
    try {
      const {
        name,
        type,
        country,
        region,
        lon,
        lat,
        description,
        recommendations,
      } = req.body;

      if (
        !name ||
        !type ||
        !country ||
        !region ||
        !lon ||
        !lat ||
        !description ||
        !recommendations
      ) {
        return res.status(400).json({ error: "All fields must be filled" });
      }

      const results = this.dao.addNewpoi(
        name,
        type,
        country,
        region,
        lon,
        lat,
        description,
        recommendations
      );

      return res.status(200).json({
        success: "Point of interest added successfully",
        id: results.lastInsertRowid,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  recommendPoi(req, res) {
    try {
      const { id } = req.params;

      const results = this.dao.recommendPoiById(id);

      if (results.changes === 1) {
        return res.status(200).json({ success: "Recommendation updated" });
      } else {
        return res.status(404).json({ error: "ID not found" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  addReview(req, res) {
    try {
      const { review } = req.body;
      const { id: poi_id } = req.params;

      if (!review) {
        return res.status(400).json({ error: "Review cannot be empty" });
      }

      const poiExists = this.db
        .prepare("SELECT id FROM pointsofinterest WHERE id = ?")
        .get(poi_id);
      if (!poiExists) {
        return res.status(404).json({ error: "ID not found" });
      }

      const result = this.dao.reviewbyId(poi_id, review);

      if (result.changes === 1) {
        return res.status(200).json({ success: "Review added successfully" });
      } else {
        return res.status(500).json({ error: "Failed to add review" });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
