/**
 * Created by younderboy on 21-02-2017.
 */
const initialState = {
    FABsOpen: false
};

// Reducer
export default function home(state = initialState, action) {
    switch (action.type) {
        // Toggle open
        case "TOGGLE_OPEN":
            return {...state, FABsOpen: action.payload};
            break;
        // Set default state
        default:
            return state;
    }
}