import mysql2 from "mysql2/promise";
import { dbenv } from "./env.config.js";

const pool = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
})

 export const getConnection = async () => {
    try {
         const connection = await pool.getConnection();
    console.log('Connected to the database');
    connection.release();
    } catch (error) {
        console.log(error)
    }
   
}
 
export default pool;