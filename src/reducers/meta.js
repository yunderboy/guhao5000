/**
 * Created by younderboy on 27-02-2017.
 */
const initialState = {
    deviceReady: true,
    initialBoot: true,
    productsPersisted: false
};


// Reducer
export default function meta(state = initialState, action) {
    switch (action.type) {
        // DEVICE_READY
        case "DEVICE_READY":
            return {...state, deviceReady: action.payload}
            break;
        // INITIAL_BOOT
        case "INITIAL_BOOT":
            return {...state, initialBoot: action.payload}
            break;
        // PRODUCTS_PERSISTED
        case "PRODUCTS_PERSISTED":
            return {...state, productsPersisted: action.payload}
            break;
        // Set default state
        default:
            return state;
    }
}

