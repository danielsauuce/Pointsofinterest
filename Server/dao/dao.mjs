
export default class Pois {

    constructor(db,pointsofinterest) {
        this.db = db;
        this.table = pointsofinterest;
    }

    getResultsBYRegion(region) {
        const query = this.db.prepare("SELECT * FROM pointsofinterest WHERE region =?");
        return query.all(region);
    }

    addNewpoi(name, type, country, region, lon, lat, description, recommendations ) {
        const query = this.db.prepare(
            "INSERT INTO pointsofinterest (name, type, country, region, lon, lat, description, recommendations) VALUES(?, ?, ?, ?, ?, ?, ?, ?) "
        );
        return query.run(name,type,country,region,lon,lat,description,recommendations);
    }

    recommendPoiById(id) {
        const query = this.db.prepare(
            "UPDATE pointsofinterest SET recommendations = recommendations +1 WHERE id = ?"
        );
        return query.run(id);
    }

    reviewbyId(id) {
        const query = this.db.prepare (
            "INSERT INTO poi_reviews "
        )
    }
}