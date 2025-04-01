import express from "express";
import ViteExpress from "vite-express";
import expressSession from 'express-session';
import betterSqlite3Session from 'express-session-better-sqlite3';
import Database from "better-sqlite3";
import session from "express-session";
import poiRouter from "./router/router.mjs"
import userRouter from "./router/user.mjs";
import userMiddleware from "./middleware.mjs";


const app = express();
const PORT = 3000;

const sessDb = new Database('session.db');
const SqliteStore = betterSqlite3Session(expressSession, sessDb);


app.use(express.json());

app.use(expressSession({
  store: new SqliteStore(), 
  secret: 'BinnieAndClyde', 
  resave: true, 
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


app.get("/random", (req, res) => {
  const username = req.session.username;
  console.log("Username:", username);
  console.log("Session:", req.session);

  res.send(`Login:${username}`);
});



ViteExpress.listen(app, 3000, () => {
  console.log(
    `Express server with Vite integration now running on Port ${PORT}`
  );
});
