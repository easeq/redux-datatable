import _ from 'lodash';

/**
 * Memoised function get visible columns by visibleColumnIds
 */
const getVisibleColumns = _.memoize(
    (visibleColumnIds, columns) => (
        visibleColumnIds.reduce((result, currentIndex) => {
            const {
                [currentIndex]: column
            } = columns;

            return [ ...result, column ];
        }, [])
    )
);

export default getVisibleColumns;
