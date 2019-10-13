import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children }) => <div className="row">{children}</div>;

Row.propTypes = {
    children: PropTypes.node
};

export default Row;