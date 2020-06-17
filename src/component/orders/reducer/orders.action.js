import {
  PLACE_ORDER,
  FULFILL_ORDER,
  PAY_FOR_ORDER,
  CANCEL_ORDER,
} from "./orders.constant";

export const placeOrderAction = ({
  customerName,
  createdAt = Date.now(),
  cone = true,
  scoops,
}) => {
  return {
    type: PLACE_ORDER, 
    payload: { customerName, createdAt, cone, scoops },
  };
};

export const fulfillOrderAction = (id) => {
  return { type: FULFILL_ORDER, payload: id };
};

export const payForOrderAction = (id) => {
  return { type: PAY_FOR_ORDER, payload: id };
};

export const cancelOrderAction = (id) => {
  return { type: CANCEL_ORDER, payload: id };
};
