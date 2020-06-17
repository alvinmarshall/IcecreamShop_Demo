import { VANILLA } from "../../../flavors/flavors.contant";
import {
  placeOrder,
  payForOder,
  fulfillOrder,
  cancelOrder,
} from "../../reducer/orders.reducer";
import { ORDER_STATUS } from "../../reducer/orders.constant";

describe("order reducer ()", () => {
  const DATE_TIME = 1592354033763;

  describe("store new order", () => {

    it('should return default state in store', () => {
      const newState = placeOrder(undefined )
      expect(newState[0].status).toEqual(ORDER_STATUS.PENDING);
    });

    it("should store the order in state", () => {
      const newState = placeOrder(undefined, {
        customerName: "any_customer_name",
        createdAt: DATE_TIME,
        cone: false,
        scoops: {
          [VANILLA]: 1,
        },
      });
      expect(newState.length).toEqual(1);
      expect(newState[0]).toEqual({
        customerName: "any_customer_name",
        cone: false,
        createdAt: DATE_TIME,
        scoops: {
          [VANILLA]: 1,
        },
        status: ORDER_STATUS.PENDING,
      });
    });
  });

  describe("fulfill order", () => {
    it("should not modify order if id is invalid in store", () => {
      const oldState = [
        {
          customerName: "any_customer",
          status: ORDER_STATUS.PENDING,
        },
      ];
      const orderId = 1;
      const newState = fulfillOrder(oldState, orderId);
      expect(newState).toEqual(oldState);
    });

    it("should mark fullfill order in the store", () => {
      const oldState = [
        {
          customerName: "any_customer",
          status: ORDER_STATUS.PENDING,
        },
      ];
      const orderId = 0;
      const newState = fulfillOrder(oldState, orderId);
      expect(newState[0].status).toEqual(ORDER_STATUS.FULFILLED);
    });
  });

  describe("paid order", () => {
    it("should not modify order if id is invalid in store", () => {
      const oldState = [
        {
          customerName: "any_customer",
          status: ORDER_STATUS.FULFILLED,
        },
      ];
      const orderId = 1;
      const newState = payForOder(oldState, orderId);
      expect(newState).toEqual(oldState);
    });

    it("should mark paid order in the store", () => {
      const oldState = [
        {
          customerName: "any_customer",
          status: ORDER_STATUS.FULFILLED,
        },
      ];
      const orderId = 0;
      const newState = payForOder(oldState, orderId);
      expect(newState[0].status).toEqual(ORDER_STATUS.PAID);
    });
  });

  describe("Cancel order", () => {
    it("should remove order in store", () => {
      const oldState = [
        {
          customerName: "any_customer",
          status: ORDER_STATUS.FULFILLED,
        },
      ];
      const orderId = 0;
      const newState = cancelOrder(oldState, orderId);
      expect(newState).toEqual([]);
    });
  });
});
