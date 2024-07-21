import { NextFunction, Request, Response } from "express";
import { auth } from "../config/firebaseConfig";
import createHttpError from "http-errors";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization') || req.header('authorization');
    const bearer = token?.split('Bearer ')[1];

    if (!token || !bearer) {
        return res.status(401).send('Unauthorized');
    }

    try {
        const verifiedToken = await auth.verifyIdToken(bearer);
        if (verifiedToken) {
            return next();
        }
        next(createHttpError(401, 'Unauthorized'));
    } catch (error) {
        next(createHttpError(401, 'Unauthorized'));
    }
}


export default authMiddleware;