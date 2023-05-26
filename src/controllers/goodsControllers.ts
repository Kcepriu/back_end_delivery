import expressAsyncHandler from "express-async-handler";
import goodsServices from "../services/goodsServices";

class GoodsController {
  getAll = expressAsyncHandler(async (req: any, res: any) => {
    const goods = await goodsServices.show({ ...req.query });

    res.status(200).json({ code: 200, data: goods, qty: goods.length });
  });

  add = expressAsyncHandler(async (req: any, res: any) => {
    const good = await goodsServices.add({ ...req.body });

    res.status(201).json({ code: 201, data: good });
  });

  remove = expressAsyncHandler(async (req, res) => {
    const { goodId: id } = req.params;

    const good = await goodsServices.remove(id);

    res.status(200).json({ code: 200, data: good });
  });
}

const goodsController = new GoodsController();

export default goodsController;
