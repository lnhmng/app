import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from "./src/configs/postgreSQL-connect.js";
import dotenv from "dotenv";
import { CONSTANTS } from './src/utils/constants.js';
import routes from './src/routes/index.js';

dotenv.config();

const app = express();

(async () => {
  await connectDB();
})();

app.use(bodyParser.json({ limit: CONSTANTS.MAX_JSON_BODY_REQUEST }));
app.use(cors({ origin: "*" }));

app.use('/', routes);

const server = http.createServer(app);

server.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});

