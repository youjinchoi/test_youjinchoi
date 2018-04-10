import { SET_VALUE, SET_SELECTION } from './action';

const STORED_VALUE = 'stored_value';
const STORED_SELECTION = 'stored_selection';

function isLocalStorageAvailable() {
    const testKey = '__test__';
    try {
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch(e) {
        return false;
    }
}

const initialState = {
    isLocalStorageAvailable: isLocalStorageAvailable(),
    value: localStorage.getItem(STORED_VALUE),
    selection: localStorage.getItem(STORED_SELECTION)
};

const valueAndSelection = (state = initialState, action) => {
    switch (action.type) {
        case SET_VALUE:
            localStorage.setItem(STORED_VALUE, action.data);
            return Object.assign({}, state, {value: action.data});
        case SET_SELECTION:
            localStorage.setItem(STORED_SELECTION, action.data);
            return Object.assign({}, state, {selection: action.data});
        default:
            return state;
    }
}

export default valueAndSelection;