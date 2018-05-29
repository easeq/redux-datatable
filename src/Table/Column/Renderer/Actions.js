import React from 'react';
import PropTypes from "prop-types";
import { paramsResolver } from '../../../utils';

const _handleAction = (event, data, action, props, context) => {
    let params = paramsResolver(action.params, data);
    switch( action.type ) {
        case 'route':
            context.router.history.push({
                pathname: action.route,
                search: '?' + params.toString()
            })
            break;

        case 'action':
            props.actions[action.name](params.get());
            break;

        default:
            break;
    }
};

const _renderBtn = ( key, data, action, props, context ) =>
    <button key ={ key }
        type="button"
        className={ action.btnClass }
        onClick={ (event) => _handleAction(event, data, action, props, context) }>
        { action.label }
    </button>


const Actions = ( props, context ) => {
    const {
        data,
        config: {
            children
        },
        ...rest
    } = props;
    return (<td>
        <div className="btn-group-sm">
            { Object.keys(children).map( (key) => (
                _renderBtn( key, data, children[key], { ... rest } , context)
            )) }
        </div>
    </td>)
};

Actions.contextTypes = {
    router: PropTypes.object
};

export default Actions;