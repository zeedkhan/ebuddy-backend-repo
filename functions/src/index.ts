import { onRequest } from "firebase-functions/v1/https";
import app from "./core/app";


exports.api = onRequest(app);