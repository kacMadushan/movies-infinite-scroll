import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, name }) => (
    <img className="movie__poster" src={src} alt={name} />
);

Image.propTypes = {
    src: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
};

export default Image;