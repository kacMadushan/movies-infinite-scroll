import React, { Component } from 'react';
import { movies } from '../api/movies';
import { RowWithCol } from '../components/Grid';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieList from '../components/MovieList/MovieList';

class MoviesApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: movies,
            text: '',
            perMovies: 18,
            totalPages: null,
            scrolling: false,
        }
    };

    componentDidMount() {
        this.loadMovies()
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
    };

    handleScroll = (e) => {
        const { scrolling, totalPages, perMovies } = this.state;
        if (scrolling) return
        if (totalPages <= perMovies) return
        const lastRow = document.querySelector('div.row > div#count:last-child')
        const lastDivOffset = lastRow.offsetTop + lastRow.clientHeight;
        const pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if (pageOffset > lastDivOffset - bottomOffset) this.loadMore();
    };

    loadMovies = () => {
        const { movies } = this.state;
        const total = movies.length; // array item
        this.setState({
            movie: [...this.state.movies],
            scrolling: false,
            totalPages: total,
        })
    };

    loadMore = () => {
        this.setState((prevState) => ({
            perMovies: prevState.perMovies + 6,
            scrolling: true,
        }), this.loadMovies)
    };

    handleSearchBarChange = (e) => {
        const text = e.target.value.substr(0, 20);
        this.setState({ text })
    };

    render() {
        const { movies, text, perMovies } = this.state;
        const appHeader = {
            title: 'HD Movies',
            subTitle: 'Watch Online Movies and TV Shows'
        };

        let filteredMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
        });

        return (
            <div className="container">
                <RowWithCol col="col-md-6 offset-md-3">
                    <Header {...appHeader} />
                    <SearchBar
                        text={text}
                        handleSearchBarChange={this.handleSearchBarChange}
                    />
                </RowWithCol>
                <RowWithCol col="col-md-12">
                    <MovieList
                        filteredMovies={filteredMovies}
                        perMovies={perMovies}
                    />
                </RowWithCol>
            </div>
        );
    }
};

export default MoviesApp;