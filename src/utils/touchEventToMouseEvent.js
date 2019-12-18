import isUndefined from './isUndefined';

const eventTypeToProperty = {
    'touchStart': 'targetTouches',
    'touchMove': 'changedTouches'
};

const propertiesToMove = ['clientX', 'clientY', 'pageX', 'pageY'];

/**
 * Convert touch event to mouse event by moving the above properties
 * from the touch event.
 */
const touchEventToMouseEvent = ( event ) => {
    if (event.type.includes('mouse') || isUndefined(eventTypeToProperty[event.type])) {
        return event;
    }

    const eventKey = eventTypeToProperty[event.type];
    propertiesToMove.forEach((prop) => {
        if (!isUndefined(event[prop])) {
            return;
        }

        event[prop] = event[eventKey][0][prop];
    });

    return event;
};

export default touchEventToMouseEvent;
