import _ from 'lodash';
import isUndefined from './isUndefined';

/**
 * Memoized function to calculate the pagination props
 * based on the current query
 */
const calculatePaginationProps = _.memoize((
    query = {},
    defaultLimit = 10
) => {
    let { page, limit = 0, count = 0 } = query;
    if (page < 1) {
        page = 1;
    }

    limit = isUndefined(limit) !== true ? limit : defaultLimit;

    let start = (page - 1) * limit;
    let end = start + limit - 1;

    return {
        page,
        start,
        end: (count > end && end >= 0) ? end : count,
        count,
        limit,
        total: limit > 0 ? Math.ceil(count / limit) : 1
    };
});

export default calculatePaginationProps;
