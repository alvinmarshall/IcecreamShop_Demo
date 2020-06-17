import {
  placeOrderAction,
  payForOrderAction,
  fulfillOrderAction,
  cancelOrderAction,
} from "../../reducer/orders.action";
import {
  FULFILL_ORDER,
  PAY_FOR_ORDER,
  PLACE_ORDER,
  CANCEL_ORDER,
} from "../../reducer/orders.constant";

describe("orders action", () => {
  it("should return the order type", () => {
    const action = placeOrderAction({});
    expect(action.type).toEqual(PLACE_ORDER);
  });

  it("should return the customer name in the payload", () => {
    const action = placeOrderAction({ customerName: "any_customer_name" });
    expect(action.payload.customerName).toEqual("any_customer_name");
  });

  it("should return createdAt in the payload", () => {
    const DATE_TIME = 1592352326358;
    const action = placeOrderAction({ createdAt: DATE_TIME });
    expect(action.payload.createdAt).toEqual(DATE_TIME);
  });

  it("should return default date if no date is set in the payload", () => {
    const action = placeOrderAction({});
    expect(typeof action.payload.createdAt).toEqual("number");
  });

  it("should contain cone/cup in the payload", () => {
    const action = placeOrderAction({ cone: false });
    expect(action.payload.cone).toEqual(false);
  });

  it("should default to cone if cone is not provided in the payload", () => {
    const action = placeOrderAction({});
    expect(action.payload.cone).toEqual(true);
  });

  it("should return scoops in the payload", () => {
    const action = placeOrderAction({ scoops: {} });
    expect(action.payload.scoops).toEqual({});
  });
});

describe("fullfill order", () => {
  it("should return the right type", () => {
    const action = fulfillOrderAction();
    expect(action.type).toEqual(FULFILL_ORDER);
  });

  it("should have an order id in the payload", () => {
    const orderId = 1;
    const action = fulfillOrderAction(orderId);
    expect(action.payload).toEqual(orderId);
  });
});

describe("pay for order", () => {
  it("should return the right type", () => {
    const action = payForOrderAction();
    expect(action.type).toEqual(PAY_FOR_ORDER);
  });

  it("should have an order id in the payload", () => {
    const orderId = 1;
    const action = payForOrderAction(orderId);
    expect(action.payload).toEqual(orderId);
  });
});

describe("cancel order", () => {
  it("should return the right type", () => {
    const action = cancelOrderAction();
    expect(action.type).toEqual(CANCEL_ORDER);
  });

  it("should have an order id in the payload", () => {
    const orderId = 1;
    const action = cancelOrderAction(orderId);
    expect(action.payload).toEqual(orderId);
  });
});
