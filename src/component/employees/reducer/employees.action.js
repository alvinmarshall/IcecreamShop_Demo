import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
} from "./employees.constant";
import apiService from "../../../app/service/api/api.service";

export const fetchEmployeeAction = (limit = 7) => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_EMPLOYEE_REQUEST,
    });

    return apiService
      .fetchEmployeesAsync(limit)
      .then((employees) => {
        dispatch({
          type: FETCH_EMPLOYEE_SUCCESS,
          payload: employees,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_EMPLOYEE_FAILURE,
          payload: err.message,
        });
      });
  };
};
