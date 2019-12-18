import _ from 'lodash';

/**
 * Calculate the width of the table by the columns and,
 * the adjustment ratio based on the original size of the table and columns
 */
const calculateWidth = _.memoize(( columns, adjustment = 1 ) => (
    columns.reduce((result, column) => (
        result + ((column.width * adjustment) || 0)
    ), 0)
));

export default calculateWidth;
