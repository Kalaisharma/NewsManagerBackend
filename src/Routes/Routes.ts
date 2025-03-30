import { Router } from "express";
import { getNews } from "../Controllers/Controller";

const router = Router();

router.post("/start", getNews);

// Additional routes can be added here
// router.post("/example", exampleHandler);

export default router;
