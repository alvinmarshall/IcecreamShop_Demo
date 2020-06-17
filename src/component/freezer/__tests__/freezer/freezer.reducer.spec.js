import {
  updateTemperature,
  addProductToFreezer,
} from "../../reducer/freezer.reducer";

import { VANILLA } from "../../../flavors/flavors.contant";

describe("freezer reducer ()", () => {
  it("should store the temperature in the state", () => {
    const newState = updateTemperature(undefined, -5);
    expect(newState.temperature).toEqual(-5);
  });

  it("should store our product in the state", () => {
    const newState = addProductToFreezer(undefined, {
      name: VANILLA,
      amount: 5,
    });
    expect(newState.flavors[VANILLA]).toEqual(5);
  });

  it("should add the scoops if it already exists", () => {
    const oldState = {
      flavors: {
        [VANILLA]: 5,
      },
    };
    const newState = addProductToFreezer(oldState, {
      name: VANILLA,
      amount: 5,
    });
    expect(newState.flavors[VANILLA]).toEqual(10);
  });

  it("should make sure not to overflow the freezer", () => {
    const oldState = {
      flavors: {
        [VANILLA]: 58,
      },
    };
    const newState = addProductToFreezer(oldState, {
      name: VANILLA,
      amount: 5,
    });
    expect(newState.flavors[VANILLA]).toEqual(60);
  });
});
