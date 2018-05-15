import React from 'react';
import PropTypes from "prop-types";

const Limiter = ({ name, url, options, setLimit }) =>
    <label className="limiter">
        <select className="form-control input-sm" id="limiter" onChange={ (event) => setLimit(name, url, event.target.value) }>
            { options.map( (option, index) =>
                <option key={ index }>{ option }</option>
            ) }
        </select> per page
    </label>

Limiter.propTypes = {
    options: PropTypes.array.isRequired,
    setLimit: PropTypes.func
}

export default Limiter;
