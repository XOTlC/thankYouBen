import { Application, Request, Response } from "express";

interface TestRequest extends Request {
    query: {
        test: string;
    };
}

export default (app: Application) => app.get("/api/test", (req: TestRequest, res: Response) => {
    res.status(200).json({ test: req.query.test });
});