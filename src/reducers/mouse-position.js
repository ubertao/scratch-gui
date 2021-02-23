const UPDATE_MOUSE_POSITION = 'scratch-gui/mouse-position/UPDATE';

const initialState = {x: 0, y: 0};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case UPDATE_MOUSE_POSITION:
        return {x: action.mouseX, y: action.mouseY };
    default:
        return state;
    }
};

const updateMousePosition = function (x, y) {
    return {
        type: UPDATE_MOUSE_POSITION,
        mouseX: x,
        mouseY: y
    };
};

export {
    reducer as default,
    initialState as updateMousePositionInitialState,
    updateMousePosition
}