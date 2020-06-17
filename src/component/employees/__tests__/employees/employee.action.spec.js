import { fetchEmployeeAction } from "../../reducer/employees.action";
import apiService from "../../../../app/service/api/api.service";
import {
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_FAILURE,
} from "../../reducer/employees.constant";

describe("fetchEmployeeAction()", () => {
  let spy;
  const fakeUser = [{ name: {}, picture: {} }];
  const errorMsg = "an error occurred";

  it("should dispatch REQUEST action when dispatched", () => {
    spy = jest.fn();
    const action = fetchEmployeeAction();
    action(spy).then(() => {
      expect(spy.mock.calls[0][0]).toEqual({
        type: FETCH_EMPLOYEE_REQUEST,
      });
    });
  });

  it("should dispatch SUCCESS action when data is fetched successfully", () => {
    apiService.fetchEmployeesAsync = jest.fn(() => Promise.resolve(fakeUser));
    spy = jest.fn();
    const action = fetchEmployeeAction();
    action(spy).then(() => {
      expect(spy.mock.calls[1][0]).toEqual({
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: fakeUser,
      });
    });
  });

  it("should dispatch FAILURE action when remote not available", () => {
    apiService.fetchEmployeesAsync = jest.fn(() =>
      Promise.reject(new Error("an error ocurred"))
    );
    spy = jest.fn();
    const action = fetchEmployeeAction();
    action(spy).then(() => {
      expect(spy.mock.calls[1][0]).toEqual({
        type: FETCH_EMPLOYEE_FAILURE,
        payload: errorMsg,
      });
    });
  });
});
