import mongoose from "mongoose";
import { config } from ".";

export const dbConnector = () => {
    return mongoose.connect(config.dbUrl);
}

