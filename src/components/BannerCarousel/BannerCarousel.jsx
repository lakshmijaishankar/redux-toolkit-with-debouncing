import React, { useEffect, useState } from 'react';
import './BannerCarousel.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import { GrNext, GrPrevious } from 'react-icons/gr'

const BannerCarousel = props => {
    const { bannerDetails } = props;
    const [nextImage, setNextImage] = useState(0);

    const nextCarousel = () => {
        setNextImage(curr => curr === bannerDetails.length - 1 ? 0 : curr + 1);
    }

    const preCarousel = () => {
        setNextImage(curr => curr === 0 ? bannerDetails.length - 1 : curr - 1);
    }

    // useEffect(() => {
    //     setInterval(nextCarousel, 6000)
    // }, [])
    return (
        <>
            {
                bannerDetails.map(movie => (
                    <section className='banner__carousel' style={{ background: ` linear-gradient(90deg, #171c2c80, hsl(0, 0%, 100%, 0.2)),url(${movie.movieImage})`, transform: `translateX(${-nextImage * 100}%)` }} key={movie.movieName}>
                        <div className="banner__carousel__descrip">
                            <h1 className='movie__name'>{movie.movieName}</h1>
                            <ul>
                                <li>{movie.movieRelase}</li>
                                <li>{movie.movieHour}</li>
                                <li>{movie.movieLanguage}</li>
                            </ul>
                            <article>
                                <p>{movie.movieTitle}</p>
                            </article>
                            <div className="watch__movie">
                                <button type='button'>
                                    <BsFillPlayFill />
                                    <span>watch now</span>
                                </button>
                            </div>
                        </div>
                    </section>
                ))
            }
            <button className="carousel__btn btn__prev">
                <button onClick={preCarousel}><GrPrevious /></button>
            </button>
            <div className='carousel__btn btn__next'>
                <button onClick={nextCarousel}><GrNext color='white' /></button>
            </div>

        </>
        // <>
        //     <div className='banner__carousel carousel__1'></div>
        //     <div className='banner__carousel carousel__2'></div>
        //     <div className='banner__carousel carousel__3'></div>
        //     <section className='banner__carousel' sty>

        //     </section>
        // </>
    )
}

export default BannerCarousel