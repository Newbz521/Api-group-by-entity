
import { Router } from "express";
import * as controllers from "./dataOneController.js";

const router = Router();

router.get("/dataones", controllers.getDataOnes);
router.get("/dataones/:id", controllers.getDataOne);
router.post("/dataones", controllers.createDataOne);
router.put("/dataones/:id", controllers.updateDataOne);
router.delete("/dataones/:id", controllers.deleteDataOne);

export default router;