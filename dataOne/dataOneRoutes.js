
import { Router } from "express";
import * as controllers from "./dataOneController.js";

const router = Router();

router.get("/automations", controllers.getDataOnes);
router.get("/automations/:id", controllers.getDataOne);
router.get("/automations/profession/:id", controllers.getDataByProfession);
router.post("/automations", controllers.createDataOne);
router.put("/automations/:id", controllers.updateDataOne);
router.delete("/automations/:id", controllers.deleteDataOne);

export default router;