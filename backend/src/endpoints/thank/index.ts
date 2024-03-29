import { Application, Request, Response } from "express";
import { Sequelize } from "sequelize-typescript";
import { validate } from "class-validator";

interface ThankRequest extends Request {
    body: {
        name: string;
        message: string;
    };
}

export default (app: Application, db: Sequelize) => app.post("/api/thank", async (req: ThankRequest, res: Response) => {
    await validate(req.body, { whitelist: true });

    const thank = await db.models.Thanks.findOne({ where: { ipAddress: req.ip } });
    if (thank) return res.status(400).json({ success: false, message: "already thanked" });

    await db.models.Thanks.create({
        name: req.body.name,
        message: req.body.message,
        ipAddress: req.ip
    });

    res.status(200).json({ success: true });
});