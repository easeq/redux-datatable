/**
 * Prepare payload for an action
 */
const prepareActionPayload = ({
    reducerName,
    config: { name, routes, entity, primaryKey }
}) => (
    ( payload = {} ) => ({ name, reducerName, routes, entity, payload, primaryKey })
);

export default prepareActionPayload;
