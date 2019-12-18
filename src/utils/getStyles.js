/**
 * Get styles passed as props for a styled-component
 */
const getStyles = (styles = {}, name) => {
    const {
        [name]: style
    } = styles;

    return style;
};

export default getStyles;
