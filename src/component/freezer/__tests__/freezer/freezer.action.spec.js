import {
  updateTemperatureAction,
  addProductToFreezerAction,
} from "../../reducer/freezer.action";

import {
  UPDATE_TEMPERATURE,
  ADD_PRODUCT_TO_FREEZER,
} from "../../reducer/freezer.constant";

describe("update temperature ()", function () {
  it("should contain the right action type", function () {
    const action = updateTemperatureAction();
    expect(action.type).toEqual(UPDATE_TEMPERATURE);
  });

  it("should contain the temperature in the payload", function () {
    const action = updateTemperatureAction(5);
    expect(action.payload).toEqual(5);
  });
});

describe("add item to freezer ()", function () {
  it("should contain the right action type", function () {
    const action = addProductToFreezerAction();
    expect(action.type).toEqual(ADD_PRODUCT_TO_FREEZER);
  });

  it("should have a name in the action payload", function () {
    const action = addProductToFreezerAction("foo");
    expect(action.payload.name).toEqual("foo");
  });

  it("should have an amount in the action payload", function () {
    const action = addProductToFreezerAction("foo");
    expect(action.payload.amount).toEqual(20);
  });
});
