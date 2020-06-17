import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';

import configStore from "./app/store/config_store";
import { fetchEmployeeAction } from "./component/employees/reducer/employees.action";
import { addProductToFreezerAction, updateTemperatureAction } from "./component/freezer/reducer/freezer.action";
import { MOCHA } from "./component/flavors/flavors.contant";

configStore.dispatch(addProductToFreezerAction(MOCHA,12))
configStore.dispatch(updateTemperatureAction(-5))
configStore.dispatch(fetchEmployeeAction());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


