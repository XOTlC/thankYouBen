import "dotenv/config";
import express, { Application } from "express";
import { Sequelize } from "sequelize-typescript";

const app: Application = express()
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set("trust proxy", 1);

const db: Sequelize = await import("./database/index.js").then((db) => db.default());

await import("./endpoints/index.js").then((endpoints) => endpoints.default(app, db));

app.listen(process.env.PORT, () => {
    console.log(`thankYouBen server has started on port ${process.env.PORT}.`);
});