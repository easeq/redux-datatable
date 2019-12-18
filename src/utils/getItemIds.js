import _ from 'lodash';

/**
 * Get primary key values of the selected rows.
 *
 * For select-all case, deduces the values from the table data (both normalized and de-normalized cases)
 * For manual selection case, retrives the selected values from the selection object
 */
const getItemIds = ( selection, items, primaryKey, schema ) => {
    if (selection.all === true) {
        return items.reduce((acc, item, index) => {
            const itemId = schema ? item : _.get(item, primaryKey);
            if (_.get(selection, ['selected', primaryKey, itemId]) !== false) {
                acc.push(itemId);
            }

            return acc;
        }, []);
    }

    return _.reduce(_.get(selection, ['selected', primaryKey]), (acc, value, key) => {
        if (value !== false) {
            acc.push(key);
        }

        return acc;
    }, []);
};

export default getItemIds;
