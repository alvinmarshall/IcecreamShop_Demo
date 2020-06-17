import { combineReducers } from "redux";
import freezerReducer from "../../component/freezer/reducer/freezer.reducer";
import ordersReducer from "../../component/orders/reducer/orders.reducer";
import employeesReducer from "../../component/employees/reducer/employees.reducer";

const rootReducer = combineReducers({
  freezer: freezerReducer,
  orders: ordersReducer,
  employees:employeesReducer
});

export default rootReducer;
