import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../Grid';
import MovieListItem from './MovieListItem/MovieListItem';

const MovieList = ({ filteredMovies, perMovies }) => {
    let showMovies = null;
    const movieList = filteredMovies.slice(0, perMovies).map((movie) => (
        <MovieListItem
            key={movie.id}
            {...movie}
        />
    ));
    showMovies = filteredMovies.length > 0 ? movieList : null;

    return (
        <div className="movie__list">
            <Row>
                {showMovies}
            </Row>
        </div>
    );
};

MovieList.propTypes = {
    filteredMovies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    perMovies: PropTypes.number.isRequired,
};

export default MovieList;