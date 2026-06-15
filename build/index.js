import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";
import { connectMongo } from "./config/mongo.js";
import caterer_router from "./modules/caterers/router/caterer_router.js";
dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
const httpServer = createServer(app);
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend Running",
    });
});
app.use("/api", caterer_router);
connectMongo();
httpServer.listen(port, () => {
    console.log(`Server running on port ${port} and url http://localhost:${port}/`);
});
