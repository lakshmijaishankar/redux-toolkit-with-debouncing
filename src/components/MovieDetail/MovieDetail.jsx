import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { movieDetails } from '../../feature/movies/movieSlice';

const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(movieDetails(imdbID))
    }, [imdbID])
    return (
        <section className='movie__detail bg-sky-400'>MovieDetail Id : {imdbID}</section>
    )
}

export default MovieDetail