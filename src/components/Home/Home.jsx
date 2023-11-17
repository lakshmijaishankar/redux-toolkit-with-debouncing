import React, { useEffect } from 'react'
import './Home.scss';
import Banner from '../Banner/Banner';
import MovieListing from '../MovieListing/MovieListing';
import SeriesListing from '../Series/SeriesListing';

const Home = () => {
    useEffect(() => {
        return () => {
            console.log("home component")
        }
    }, [])
    return (
        <main className="home__container">
            <Banner />
            <MovieListing />
            <SeriesListing />
        </main>
    )
}

export default React.memo(Home)