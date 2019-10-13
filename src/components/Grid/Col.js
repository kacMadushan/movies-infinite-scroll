import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ col, children }) => <div className={col}>{children}</div>;

Col.propTypes = {
    col: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Col;