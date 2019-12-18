/**
 * Return columns that are initially visible.
 */
const getInitialVisibleColumns = ( columns = [] ) => (
    columns.reduce((visibleColumnIndexes, column, index) => {
        if (column.visible !== false) {
            visibleColumnIndexes.push(index);
        }

        return visibleColumnIndexes;
    }, [])
);

export default getInitialVisibleColumns;
