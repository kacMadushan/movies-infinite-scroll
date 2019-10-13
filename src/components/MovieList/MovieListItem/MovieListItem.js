import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../Image/Image';

const MovieListItem = ({ url, title }) => (
    <div className="col-sm-4 col-md-3 col-lg-2" id="count">
        <div className="movie__list__item">
            <div className="movie__list__item__image">
                <Image src={url} name={title} />
            </div>
            <div className="movie__list__item__info">
                <h5 className="movie__list__item__info__title">
                    {title}
                </h5>
            </div>
        </div>
    </div>
);

MovieListItem.propTypes = {
    url: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
}

export default MovieListItem;