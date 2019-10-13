import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subTitle }) => (
    <div className="header">
        <h1 className="header__title">{title}</h1>
        <p className="header__sub__title">{subTitle}</p>
    </div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default Header;