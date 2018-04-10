export const SET_VALUE = 'SET_VALUE';
export const SET_SELECTION = 'SET_SELECTION';

export function setValue(value) {
    return {
        type: SET_VALUE,
        data: value
    };
}

export function setSelection(selection) {
    return {
        type: SET_SELECTION,
        data: selection
    };
}