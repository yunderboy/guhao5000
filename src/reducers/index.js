/**
 * Created by younderboy on 21-02-2017.
 */
import { combineReducers } from 'redux';
import home from './home';
import meta from './meta';
import productScanning from './productScanning'
import recipe from './recipe';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    home: home,
    meta: meta,
    productScanning: productScanning,
    recipe: recipe,
    routing: routerReducer
});