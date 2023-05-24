import express from "express";
import ctrl from "backend/controllers/shopsControllers";
import validateBody from "backend/middlewapres/validateBody";
import { shemas } from "backend/models/shopsModel";

const routerShops = express.Router();

routerShops.get("/", ctrl.getAll);
routerShops.get("/:shopId", ctrl.getOne);
routerShops.post("/", validateBody(shemas.schemaAddShop), ctrl.add);
routerShops.delete("/:shopId", ctrl.remove);

export default routerShops;
