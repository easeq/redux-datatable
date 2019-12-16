import React from 'react';
import styled from 'styled-components';
import { getExtendedStyles } from '../utils';
import { createSelectable } from 'react-selectable-fast';

const Tr = createSelectable(({
    selectableRef,
    isSelected,
    isSelecting,
    className,
    children,
    style,
    columns
}) => (
    <div ref={ selectableRef } className={ className + (isSelected ? ' selected' : '') } style={ style }>
        { columns.map((column, index) => (
            children(column, index)
        )) }
    </div>
));

const StyledTr = styled(Tr).attrs(({ top, left }) => ({
    style: { top, left }
})) `
    display: flex;
    width: auto;
    padding: 0;
    height: ${props => props.height ? `${props.height}px` : 'auto'};
    position: relative;
    background: none;
    position: ${props => props.position || 'relative'};

    &.selected {
        background: rgba(0,123,255,.1)
    }
`;
const ExtendedStyledTr = styled(StyledTr)(getExtendedStyles());
export default React.memo(ExtendedStyledTr);
