import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi'
import './SearchBox.scss';

const SearchBox = ({ searchIsOpen, setSearchItem, searchItem }) => {
    return (
        <form className="search__movie_container" style={{ transform: `${searchIsOpen ? 'translateX(5rem)' : 'translateX(-100%)'}` }} action='/search'>
            <section className="movie__saerch__input">
                <input type="search" placeholder='Search for movies' autoComplete='off' onChange={e => setSearchItem(e.target.value)} value={searchItem} />
                <button type='button'>
                    <HiOutlineSearch />
                </button>
            </section>
        </form>
    )
}

export default SearchBox