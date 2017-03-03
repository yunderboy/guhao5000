/**
 * Created by younderboy on 27-02-2017.
 */
const initialState = {
    scannedProduct: {},
    status: "loading",
    modalOpen: false
};

// Reducer
export default function productScanning(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_PRODUCT_MODAL":
            return {...state, modalOpen: action.payload};
            break;

        case "SET_SCANNED_PRODUCT":
            return {...state, scannedProduct: action.payload};
            break;

        case "SET_SCAN_STATUS":
            return {...state, status: action.payload};
            break;

            // Set default state
        default:
            return state;
    }
}

