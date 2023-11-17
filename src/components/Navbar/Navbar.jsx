import React, { forwardRef, useEffect, useRef, useState, useCallback } from 'react';
import './Navbar.scss';
import { AiOutlineHome, AiOutlineCalendar, AiOutlineUserAdd } from 'react-icons/ai'
import { HiOutlineSearch } from 'react-icons/hi'
import { BiMoviePlay } from 'react-icons/bi'
import { LiaTvSolid } from 'react-icons/lia'
import SearchBox from '../SearchBox/SearchBox';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { seriesFetch } from '../../feature/series/seriesSlice';
import useDebounce from '../../hooks/useDebounce'
const Navbar = () => {
    const [searchIsOpen, setSearchIsOpen] = useState(false);
    const selectedIcon = useRef();
    const [searchItem, setSearchItem] = useState('')
    const [timer, setTimer] = useState(undefined)
    const dispatch = useDispatch();
    const value = useDebounce(searchItem, 1000)
    // console.log(value)
    /* useEffect(() => {
        console.log(searchItem)
        let temp;
        if (searchItem != '') {
            clearTimeout(timer);
            console.log(timer)
            temp = setTimeout(() => {
                dispatch(seriesFetch(searchItem))
            }, 250)
            setTimer(temp)
        }
        return () => {
            // console.log("hello")
            clearTimeout(temp);
        }
    }, [searchItem]); */

    /*  const handleSeriesSearch = useCallback(value => {
         dispatch(seriesFetch(value))
         setSearchItem(value)
     }, [searchItem]) */

    useEffect(() => {
        if (value != "")
            dispatch(seriesFetch(value))
        console.log(searchItem)
    }, [value])
    return (
        <aside className='movie__aside__left'>
            <nav className="movie__navbar">
                <ul className="nav__links">
                    <li className='nav__item_home'>
                        <Link to='/' onClick={() => console.log(selectedIcon.current)} ref={selectedIcon}>
                            <AiOutlineHome />
                        </Link>
                        {/* <span>home</span> */}
                    </li>
                    <li className='nav__item__search'>
                        <HiOutlineSearch onClick={() => setSearchIsOpen(!searchIsOpen)} />
                        <SearchBox searchIsOpen={searchIsOpen} setSearchItem={setSearchItem} searchItem={searchItem} />
                        {/* <span>search</span> */}
                    </li>
                    <li className='nav__item__movie' >
                        <Link to='/movies'>
                            <BiMoviePlay />
                        </Link>
                        {/* <span>movie</span> */}
                    </li>
                    <li className='nav__item__tv'>
                        <Link to='/series'>
                            <LiaTvSolid />
                        </Link>
                        {/* <span>series</span> */}
                    </li>
                    <li className="nav__item__calender">
                        <AiOutlineCalendar />
                        {/* <span>calender</span> */}
                    </li>
                    <li className="nav__item__profile">
                        <AiOutlineUserAdd />
                        {/* <span>profile</span> */}
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar