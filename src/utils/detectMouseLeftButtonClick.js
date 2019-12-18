/**
 * Check whether the event is a mouse button click event.
 */
const detectMouseLeftButtonClick = ( event ) => {
    event = event || window.event;
    if ('buttons' in event) {
        return event.buttons === 1;
    }

    var button = event.which || evt.button;
    return button === 1;
}

export default detectMouseLeftButtonClick;
