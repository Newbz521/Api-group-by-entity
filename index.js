import { Router } from "express";
import dataOneRoutes from "./dataOne/dataOneRoutes.js";
// import dataTwoRoutes from "./dataTwo/dataTwoRoutes.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", dataOneRoutes);
// router.use("/", dataTwoRoutes);


export default router;