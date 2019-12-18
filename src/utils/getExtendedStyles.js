/**
 * Get extended styles passed from table schema to styled-component
 */
const getExtendedStyles = ( name ) => ({ styles = {} }) => {
    if (!name) {
        return styles;
    }

    const {
        [name]: style
    } = styles;

    return style;
};

export default getExtendedStyles;
