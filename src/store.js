/**
 * Created by younderboy on 21-02-2017.
 */
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

// Store and middleware setup
const middleware = applyMiddleware(logger(), routerMiddleware(browserHistory));
export default createStore(reducer, middleware);
