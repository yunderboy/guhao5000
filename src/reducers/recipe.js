/**
 * Created by younderboy on 01-03-2017.
 */
const initialState = {
    name: '',
    description: '',
    preparationForm: 1
};

// Reducer
export default function recipe(state = initialState, action) {
    switch (action.type) {
        case "SET_PREPARATION_FORM":
            return {...state, preparationForm: action.payload};
            break;

    // Set default state
        default:
            return state;
    }
}

