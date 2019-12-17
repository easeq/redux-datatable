import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { getExtendedStyles } from '../utils';
import { createSelectable } from 'react-selectable-fast';
import { useSelector } from 'react-redux';
import ConfigContext from '../context';

const Tr = createSelectable(({
    selectableRef,
    isSelected,
    isSelecting,
    className,
    children,
    style,
    columns,
    type,
    itemIndex,
    primaryKey,
    schema
}) => {
    const { getData } = useContext(ConfigContext);
    const primaryKeyValue = useSelector(getData(tableData => (
        type === 'body'
            ? !_.isEmpty(schema) ? tableData.items[itemIndex] : tableData.items[itemIndex][primaryKey]
            : null
    )));

    return (
        <div
            ref={ selectableRef }
            className={
                className +
                (isSelecting ? ' drag' : '') +
                (isSelected || isSelecting ? ' selected' : '')
            }
            style={ style }
            data-primary-key={ primaryKeyValue }
        >
            { columns.map((column, index) => (
                children(column, index)
            )) }
        </div>
    );
});

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
        background: rgba(0,123,255,.1);
    }

    &.drag {
        cursor: pointer;
    }
`;
const ExtendedStyledTr = styled(StyledTr)(getExtendedStyles());
export default React.memo(ExtendedStyledTr);
