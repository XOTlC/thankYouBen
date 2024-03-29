import { Application } from "express";
import { Sequelize } from "sequelize-typescript";

import thank from "./thank/index.js";

export default (app: Application, db: Sequelize) => {
    thank(app, db);
};