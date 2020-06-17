import createReducer from "../../../app/reducer/reducer_utils";
import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from "./freezer.constant";

const initialState = {
  temperature: null,
  flavors: {},
};

export const updateTemperature = (state = initialState, payload) => {
  return { ...state, temperature: payload };
};

export const addProductToFreezer = (state = initialState, payload) => {
  const amount = (state.flavors[payload.name] || 0) + payload.amount;
  return {
    ...state,
    flavors: {
      ...state.flavors,
      [payload.name]: Math.min(amount, 60),
    },
  };
};

export default createReducer(initialState, {
  [UPDATE_TEMPERATURE]: updateTemperature,
  [ADD_PRODUCT_TO_FREEZER]: addProductToFreezer,
});
