import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/dbconfig.js";


dotenv.config()

const app = express()
const port = process.env.PORT  || 3000

app.use(cors())
app.use(express.json())



function start() {
    try {
      connectDB(process.env.DBURL);
      console.log("Connected to database ...");
      app.listen(port, () => {
        console.log(`Server running on port: ${port} ...`);
      });
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  }
  
  start();
  

