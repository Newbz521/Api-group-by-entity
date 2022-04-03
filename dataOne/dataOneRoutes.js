import { Router } from "express";
import * as controllers from "./dataOneController.js";

const router = Router();
//Set up routes to access DataOne controlls
router.get("/automations", controllers.getDataOnes);
router.get("/automations/:id", controllers.getDataOne);
router.get("/automations/occupation/:id", controllers.getDataByProfession);
router.get(
  "/automations/occupation/all/show",
  controllers.getDataAllProfession
);
router.post("/automations", controllers.createDataOne);
router.put("/automations/:id", controllers.updateDataOne);
router.delete("/automations/:id", controllers.deleteDataOne);

export default router;
