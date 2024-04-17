import express from 'express'
import mongoose from "mongoose";
import Hello from "./Hello.js"
import Lab5 from './Lab5.js'
import cors from "cors";
import CourseRoutes from './Kanbas/Database/Courses/routes.js';
import UserRoutes from './Kanbas/Database/Users/routes.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import "dotenv/config";
import session from 'express-session';



const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING, { dbName: "kanbas"});
console.log(CONNECTION_STRING)
const app = express();
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
app.use(session(sessionOptions));
  
app.listen(process.env.PORT || 4000);
const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app);
Lab5(app);
Hello(app);
