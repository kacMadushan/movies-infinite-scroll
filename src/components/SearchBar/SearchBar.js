import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text, handleSearchBarChange }) => (
    <div className="search__bar">
        <div className="form-group">
            <input
                className="form-control search__bar__input"
                placeholder="Search..."
                type="text"
                value={text}
                onChange={handleSearchBarChange}
            />
        </div>
    </div>
);

SearchBar.propTypes = {
    text: PropTypes.string.isRequired,
    handleSearchBarChange: PropTypes.func.isRequired,
};

export default SearchBar;