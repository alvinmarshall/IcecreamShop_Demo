import createReducer from "../../../app/reducer/reducer_utils";
import {
  PLACE_ORDER,
  FULFILL_ORDER,
  ORDER_STATUS,
  PAY_FOR_ORDER,
  CANCEL_ORDER,
} from "./orders.constant";

const initialState = [];

export const placeOrder = (state = initialState, payload) => {
  return [...state, { ...payload, status: ORDER_STATUS.PENDING }];
};

export const fulfillOrder = (state = initialState, payload) => {
  return state.map((order, index) => {
    if (index === payload) {
      return { ...order, status: ORDER_STATUS.FULFILLED };
    }
    return order;
  });
};

export const payForOder = (state = initialState, payload) => {
  return state.map((order, index) => {
    if (index === payload) {
      return { ...order, status: ORDER_STATUS.PAID };
    }
    return order;
  });
};

export const cancelOrder = (state = initialState, payload) => {
  return state.filter((order, index) => index !== payload);
};

export default createReducer(initialState, {
  [PLACE_ORDER]: placeOrder,
  [FULFILL_ORDER]: fulfillOrder,
  [PAY_FOR_ORDER]: payForOder,
  [CANCEL_ORDER]: cancelOrder,
});
