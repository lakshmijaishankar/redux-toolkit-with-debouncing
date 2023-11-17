import React, { useEffect } from 'react';
import './MovieListing.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetcMovies } from '../../feature/movies/movieSlice';
import Spinner from '../LoadingSpinner/Spinner';
import { Link } from 'react-router-dom'

const MovieListing = () => {
    const { loading, movies, error } = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
    // console.log(movies.Search)

    useEffect(() => {
        dispatch((fetcMovies()));
    }, [])
    return (
        <section className="movie__listing__wrapper">
            {!loading && <h1>Movies</h1>}
            {
                loading ? /*<h1 style={{ color: '#007aff' }}>Loading</h1>*/
                    <Spinner postion={'absolute'} left={'45%'} top={'4rem'} /> :
                    <ul className="movie__listing">
                        {
                            movies.Search?.map(movie => {
                                return (
                                    <Link to={`moviedetails/${movie.imdbID}`} key={movie.imdbID}>
                                        <li className="movie__card" >
                                            <figure className='movie__card__img'><img src={movie.Poster} alt={movie.Title} /></figure>
                                            <article className='movie__card__title'>
                                                <h3>{movie.Title}</h3>
                                            </article>
                                            <span className="movie__card__year">{movie.Year}</span>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                // console.log(movieReducer)
            }
        </section>
    )
}

export default MovieListing