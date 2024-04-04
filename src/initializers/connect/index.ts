import { Client } from "pg";

const Connect = () => {
    const client = new Client({
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        port: Number(process.env.PG_PORT),
    });

    client.connect((err: Error) => {
        if (err) {
            console.log("Connection error", err);
            throw err;
        }
        console.log("Connected to database");
    });
};

export { Connect };
