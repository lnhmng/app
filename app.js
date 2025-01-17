import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";
import { CONSTANTS } from './src/utils/constants.js';
import routes from './src/routes/index.js';
import sequelize from './src/configs/postgreSQL-connect.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: CONSTANTS.MAX_JSON_BODY_REQUEST }));
app.use(cors({ origin: "*" }));
app.use('/', routes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    const server = http.createServer(app);

    server.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on port ${process.env.APP_PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); 
  }
};

startServer();
