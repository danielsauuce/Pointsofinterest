import Database from 'better-sqlite3';
import express from 'express';
import Session from 'express-session';
import betterSqlite3Session from 'express-session-better-sqlite3';
import ViteExpress from 'vite-express';
import userMiddleware from './middleware.mjs';
import poiRouter from './routes/router.mjs';
import userRouter from './routes/user.mjs';

const app = express();
const PORT = 3005;
const sessDb = new Database('session.db');
const SqliteStore = betterSqlite3Session(Session, sessDb);

app.use(express.json());

ViteExpress.config({
  csp: false,
});

app.use(
  Session({
    store: new SqliteStore(),
    secret: 'BinnieAndClyde',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    unset: 'destroy',
    proxy: true,
    cookie: {
      maxAge: 600000,
      httpOnly: false,
    },
  })
);

app.use('/users', userRouter);
app.use(userMiddleware);
app.use('/poi', poiRouter);

ViteExpress.listen(app, PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
