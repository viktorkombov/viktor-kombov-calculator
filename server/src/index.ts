import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { calculationsRouter } from "./router/calculations.router";
import { dbConnector } from "./config/database";
import { errorHandler } from "./utils/error-handler";
import { config } from "./config";

dbConnector()
    .then(() => {
        if (!config.port) {
            process.exit(1);
        }
        
        const PORT: number = parseInt(config.port as string, 10);
        
        const app = express();
        
        app.use(cors());
        app.use(express.json());
        app.use("/api/calculations", calculationsRouter);
        app.use(errorHandler);
        
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch(console.error);
