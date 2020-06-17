import createReducer from "../../../app/reducer/reducer_utils";
import {
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
} from "./employees.constant";

const initialState = {};

export const fetchEmployee = (state = initialState, payload) => {
  return { ...state, data: payload, error: null };
};

export const fetchEmployeeError = (state = initialState, payload) => {
  return { ...state, error: payload };
};
export default createReducer(initialState, {
  [FETCH_EMPLOYEE_SUCCESS]: fetchEmployee,
  [FETCH_EMPLOYEE_FAILURE]: fetchEmployeeError,
});
