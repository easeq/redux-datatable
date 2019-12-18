/**
 * Return an action with type and data
 */
const createActionCreator = ( type ) => ( data ) => {
    const { name, reducerName, routes, entity, payload } = data;

    // Create action of type with data
    let action = ({
        type,
        meta: { name, routes, reducerName, entity },
        payload
    });
    action.toString = () => type;

    return action;
};

export default createActionCreator;
