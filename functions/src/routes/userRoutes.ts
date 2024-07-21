import { Router } from "express";
import { updateUserCollection, usersCollection } from "../repository/userCollection";
import createHttpError from "http-errors";

export const userRoutes = Router();

// fetch-user-data
userRoutes.get("/fetch-user-data", async (req, res, next) => {
    try {
        const users = await usersCollection();

        res.json({ users: users }).status(200);
    } catch (error) {
        next(createHttpError(500, "Error fetching user data"));
    }
});


// update-user-data
userRoutes.put("/update-user-data", async (req, res, next) => {
    const { uid } = req.body;
    if (!uid) {
        return next(createHttpError(400, "Invalid request"));
    }
    try {
        const update = await updateUserCollection(uid).catch((err) => {
            return createHttpError(500, "Error updating user data");
        });

        res.json({ message: "User data updated successfully", data: update }).status(200);
    } catch (error) {
        next(createHttpError(500, "Error updating user data"));
    }
});

export default userRoutes;