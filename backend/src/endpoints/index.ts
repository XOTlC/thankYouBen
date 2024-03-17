import { Application } from "express";

import test from "./test/index.js";

export default (app: Application) => {
    test(app);
};