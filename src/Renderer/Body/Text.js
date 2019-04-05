import _ from 'lodash';
import { shouldUpdate } from '../../utils';
import React, { Fragment, Component } from 'react';

const Text = ({
    data,
    index,
    colConfig: { name }
}) => (
    <Fragment>{ _.get(data, name, '') }</Fragment>
);

export default Text;