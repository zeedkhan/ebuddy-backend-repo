import { ErrorRequestHandler } from "express";
import { isHttpError } from "http-errors";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err);
    if (isHttpError(err)) {
        return res.status(err.status).json({ error: err.message });
    }

    res.status(500).json({ error: err.message });
};


export default errorHandler;