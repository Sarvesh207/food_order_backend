import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
import logger from "./logger.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      logger.info(`⚙️  Server is running at port : ${process.env.PORT} `);
  
    });
  })
  .catch((error) => {
    logger.error("MONGODB connection failed", error);
  });
