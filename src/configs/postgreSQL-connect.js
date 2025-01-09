import pg from "pg";
import dotenv from "dotenv";

const { Client } = pg;
dotenv.config();

const connectDB = async () => {
  try {
    const client = new Client({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
    });

    await client.connect();
    console.log("Connected to PostgreSQL successfully");

    const material_id = 825438;
    const res = await client.query('SELECT * FROM basic_sys.basic_material where id = $1;', [material_id]);
    console.log("Query results:", res.rows); 

    return client;
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
    process.exit(1);
  }
};

export default connectDB;
