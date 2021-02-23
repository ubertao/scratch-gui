const UPDATE_MOUSE_POSITION = 'scratch-gui/mouse-position/UPDATE';
const SHOW_MOUSE_POSITION = 'scratch-gui/mouse-position/SHOW';

const initialState = {visible: true, x: 0, y: 0};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case UPDATE_MOUSE_POSITION:
        return {visible: state.visible, x: action.mouseX, y: action.mouseY };
    case SHOW_MOUSE_POSITION:
        return {visible: action.visible, x: state.x, y: state.y };
    default:
        return state;
    }
};

const updateMousePosition = function (x, y) {
    return {
        type: UPDATE_MOUSE_POSITION,
        mouseX: Math.round(x),
        mouseY: Math.round(y)
    };
};

const showMousePosition = function (isVisible) {
    return {
        type: SHOW_MOUSE_POSITION,
        visible: isVisible
    };
}

export {
    reducer as default,
    initialState as mousePositionInitialState,
    updateMousePosition,
    showMousePosition
}