import RequestError from "helpers/requestError";
import { modelOrder } from "models/orderModel";
import { isValidObjectId } from "mongoose";

class OrdersServices {
  // * show ALL
  show = async () => {
    const orders = await modelOrder.find({});

    if (!orders) {
      throw RequestError(400, "Unable to fetch Orders");
    }

    return orders;
  };

  // * showOne
  showOne = async (id: any) => {
    if (!isValidObjectId(id)) {
      throw RequestError(400, "Not valid ID");
    }

    const order = await modelOrder.findById(id);

    if (!order) {
      throw RequestError(400, "Unable to find Order");
    }

    return order;
  };

  // * Add
  add = async (data: any) => {
    const order = await modelOrder.create(data);

    if (!order) {
      throw RequestError(400, "Unable to save in DataBase");
    }

    return order;
  };

  // * Remove
  remove = async (id: any) => {
    if (!isValidObjectId(id)) {
      throw RequestError(400, "Not valid ID");
    }

    const order = await modelOrder.findByIdAndDelete(id);

    if (!order) {
      throw RequestError(400, "Unable to find movie");
    }
    return order;
  };
}

const ordersServices = new OrdersServices();
export default ordersServices;
