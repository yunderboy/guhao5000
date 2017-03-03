/**
 * Created by younderboy on 27-02-2017.
 */
import store from "../store";
import {meta} from "../actions";

document.addEventListener("deviceready", function () {
    store.dispatch(meta.deviceReady(true));
}, false);

