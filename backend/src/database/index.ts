import { Sequelize } from "sequelize-typescript";

import { Thanks } from "./models/thanks.model.js";

export default async () => {
    const sequelize = new Sequelize({
        database: process.env.DATABASE_NAME,
        dialect: "postgres",
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        models: [
            Thanks
        ],
        modelMatch: (filename, model) => filename.substring(0, filename.indexOf(".model")) === model.toLowerCase()
    });

    await sequelize.sync({ alter: true });

    return sequelize;
}