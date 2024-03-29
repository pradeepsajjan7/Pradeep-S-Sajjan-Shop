import { createStore } from "redux";
import reducers from "./reducers/index";

const Store = createStore(
  reducers,
  {},
  Window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
