export const addProductToFreezerAction = (type, amount) => {
  return {
    type,
    payload: amount,
  };
};
