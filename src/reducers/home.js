/**
 * Created by younderboy on 21-02-2017.
 */
const initialState = {
    coordinates: {
        x: 0,
        y: 0,
        z: 0
    }
};

// Reducer
export default function home(state = initialState, action) {
    switch (action.type) {
        // SET COORDINATES
        case "SET_COORDINATES":
            return {...state, coordinates: action.payload};
            break;
        // Set default state
        default:
            return state;
    }
}