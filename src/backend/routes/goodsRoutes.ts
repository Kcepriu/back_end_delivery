import express from "express";
import validateBody from "backend/middlewapres/validateBody";
import ctrl from "backend/controllers/goodsControllers";

import { shemas } from "backend/models/goodsModel";

const routerGoods = express.Router();

routerGoods.get("/", ctrl.getAll);
routerGoods.post("/", validateBody(shemas.schemaAddGood), ctrl.add);
routerGoods.delete("/:goodId", ctrl.remove);

export default routerGoods;
