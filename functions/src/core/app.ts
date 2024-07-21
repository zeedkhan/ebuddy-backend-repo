import express, { Express } from "express";
import userRoutes from "../routes/userRoutes";
import cors from "cors";
import authMiddleware from "../middleware/authMiddleware";
import errorHandler from "../entities/ApiError";
import createHttpError from "http-errors";

const app: Express = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    "origin": "*",
}));
app.use(authMiddleware);

app.use("/", userRoutes);

app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


export default app;