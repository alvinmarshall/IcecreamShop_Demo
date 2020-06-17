import createReducer from "../../../app/reducer/reducer_utils";
import {
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_REQUEST,
} from "./employees.constant";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const fetchEmployeeRequest = (state = initialState, payload = true) => {
  return { ...state, isLoading: payload };
};

export const fetchEmployeeSuccess = (state = initialState, payload) => {
  return { ...state, data: payload, isLoading: false };
};

export const fetchEmployeeFailure = (state = initialState, payload) => {
  return { ...state,isLoading: false, error: payload };
};

export default createReducer(initialState, {
  [FETCH_EMPLOYEE_REQUEST]: fetchEmployeeRequest,
  [FETCH_EMPLOYEE_SUCCESS]: fetchEmployeeSuccess,
  [FETCH_EMPLOYEE_FAILURE]: fetchEmployeeFailure,
});
