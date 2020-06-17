import { UPDATE_TEMPERATURE, ADD_PRODUCT_TO_FREEZER } from "./freezer.constant";

export const updateTemperatureAction = (temperature) => {
  return { type: UPDATE_TEMPERATURE, payload: temperature };
};

export const addProductToFreezerAction = (name, amount = 20) => {
  return {
    type: ADD_PRODUCT_TO_FREEZER,
    payload: { name, amount },
  };
};
