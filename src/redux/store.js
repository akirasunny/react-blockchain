import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";

const middlewares = [thunkMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(
        ...middlewares,
        createLogger()
    )
);

export default store;