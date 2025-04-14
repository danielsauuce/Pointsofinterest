import express from "express";
import ViteExpress from "vite-express";
import Session from 'express-session';
import betterSqlite3Session from 'express-session-better-sqlite3';
import Database from "better-sqlite3";
import poiRouter from "./routes/router.mjs"
import userRouter from "./routes/user.mjs";
import userMiddleware from "./middleware.mjs";


const app = express();
const PORT = 3000;
const sessDb = new Database('session.db');
const SqliteStore = betterSqlite3Session(Session, sessDb);


app.use(express.json());

app.use(Session({
  store: new SqliteStore(), 
  secret: 'BinnieAndClyde', 
  resave: false, 
  saveUninitialized: false, 
  rolling: true, 
  unset: 'destroy', 
  proxy: true, 
  cookie: { 
      maxAge: 600000, 
      httpOnly: false
  }
}));

app.use("/users",userRouter);
app.use(userMiddleware);
app.use("/poi",poiRouter);



ViteExpress.listen(app, 3000, () => {
  console.log(
    `Express server with Vite integration now running on Port ${PORT}`
  );
});
