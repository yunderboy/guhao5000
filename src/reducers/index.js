/**
 * Created by younderboy on 21-02-2017.
 */
import { combineReducers } from 'redux';
import home from './home';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    home: home,
    routing: routerReducer
});