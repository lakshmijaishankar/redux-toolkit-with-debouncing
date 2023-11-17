import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seriesFetch } from '../../feature/series/seriesSlice';
import { Link } from 'react-router-dom';
import './SeriesListing.scss';

const SeriesListing = () => {
    const { loading, series, error } = useSelector(state => state.seriesReducer);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(seriesFetch('pokemon'))
    }, [])
    return (
        <section className="series__listing__wrapper">
            {!loading && <h1>Series</h1>}
            <ul className="series__listing">
                {
                    !loading && series.Search?.map(series => {
                        return (
                            <Link to={`seriesdetails/${series.imdbID}`} key={series.imdbID}>
                                <li className="series__card" >
                                    <figure className='series__card__img'><img src={series.Poster} alt={series.Title} /></figure>
                                    <article className='series__card__title'>
                                        <h3>{series.Title}</h3>
                                    </article>
                                    <span className="series__card__year">{series.Year}</span>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default SeriesListing