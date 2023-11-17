import React, { useState } from 'react'
import './Banner.scss';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import spiderman_image from '../../images/spider-man.png';
import ironman_image from '../../images/avengers.png';
import x_men_image from '../../images/x-men.png'
const Banner = () => {
    const [bannerDetails] = useState(
        [
            {
                movieImage: spiderman_image,
                movieName: 'spiderman-1',
                movieRelase: 2002,
                movieLanguage: 'English',
                movieHour: '2h 1m',
                movieTitle: 'Average teenager Peter Parker is transformed into an extraordinary superhero after he is accidentally bitten by a radioactive spider.'
            },
            {
                movieImage: ironman_image,
                movieName: 'avengers',
                movieRelase: 2015,
                movieLanguage: 'English',
                movieHour: '2h 21m',
                movieTitle: 'Tony Stark builds an AI system named Ultron, and when things go wrong, its up to Earths mightiest heroes to stop the villain from enacting his terrible plan.'
            },
            {
                movieImage: x_men_image,
                movieName: 'X-MEN',
                movieRelase: 2011,
                movieLanguage: 'English',
                movieHour: '2h 11m',
                movieTitle: 'During the Cold War, fellow mutants Charles Xavier and Erik Lehnsherr join forces with other mutants to save humanity from a nuclear attack.'
            }
        ])
    return (
        <section className="movie__banner">
            {console.log(spiderman_image)}
            <BannerCarousel bannerDetails={bannerDetails} />
        </section>
    )
}

export default Banner