import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/root.reducer";
import redux_logger from "../middleware/redux_logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk, redux_logger];
const middlewareEnchancer = applyMiddleware(...middleware);
const storeEnchancer = [middlewareEnchancer];
const composeEnhancer = composeWithDevTools(...storeEnchancer);
const configStore = createStore(rootReducer, composeEnhancer);

export default configStore;
