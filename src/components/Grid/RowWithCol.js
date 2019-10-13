import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Col from './Col';

const RowWithCol = ({ col, children }) => (
    <Row>
        <Col col={col}>{children}</Col>
    </Row>
);

RowWithCol.propTypes = {
    col: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default RowWithCol;