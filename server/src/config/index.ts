import * as dotenv from "dotenv";

dotenv.config();

const dbPass = process.env.PASS;

export const config = {
    port: process.env.PORT || 3000,
    dbUrl: `mongodb+srv://viktorkombov:${dbPass}@cluster0.3vnvm.mongodb.net/calculations?retryWrites=true&w=majority`,
}
