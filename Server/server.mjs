import express from "express";
const app = express();
app.use(express.json());

const PORT = 3001;

import cors from 'cors';
app.use(cors());

import Database from "better-sqlite3";
const db = Database("./Database/file_name");


//API to get POI in a region
app.get("/poi/:region", (req,res) => {
    try{
        const query = db.prepare("SELECT * FROM pointofinterest WHERE region =?");
        const results = db.query.all(req.params.region);

        res.json(results);

    }catch{e} {
        res.status(500).json({error: "ERROR"})
    }
    
});


//API to Post data to the database
app.post("/poi/newpointofinterest", (req,res) => {

    try{

        if(
            req.body.name == "" ||
            req.body.type == "" ||
            req.body.country == "" ||
            req.body.region == "" ||
            req.body.ion == "" ||
            req.body.lat == "" ||
            req.body.description == "" ||
            req.body.recommendation == ""

        ) {
            (res.status(400).json({error: "All fields must be field"}))
        }

        const query = db.prepare("INSERT INTO pointofinterest (name, type, country, region, ion, lat, description, recommendation) VALUES(?, ?, ?, ?, ?, ?, ?, ?) ");

        const results = query.run(
        req.body.name,
        req.body.type,
        req.body.country,
        req.body.region,
        req.body.ion,
        req.body.lat,
        req.body.description,
        req.body.recommendation
        ); 
        res.json(results);


    }catch (error){
        res.status(500).json({error:error.message})
    }

});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); 

