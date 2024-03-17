import express, { Application } from "express";

const app: Application = express();

await import("./endpoints/index.js").then((endpoints) => endpoints.default(app));

app.listen(process.env.PORT, () => {
    console.log(`thankYouBen server has started on port ${process.env.PORT}.`);
});