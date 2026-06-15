import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongo } from "./config/mongo.js";
import caterer_router from "./modules/caterers/router/caterer_router.js";
dotenv.config();
const port = process.env.PORT;
const app = express();
const httpServer = createServer(app);
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
connectMongo();
app.use(express.json());
app.use("/api", caterer_router);
httpServer.listen(port, () => {
    console.log(`Server running on port ${port} and url http://localhost:${port}/`);
});
