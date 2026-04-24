import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT 

export const dbenv = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE
}

