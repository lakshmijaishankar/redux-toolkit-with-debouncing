import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail/MovieDetail'
import MovieListing from './components/MovieListing/MovieListing'
import SeriesListing from './components/Series/SeriesListing';
import './index.css';
const App = () => {
  return (
    <section className="app__container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='moviedetails/:imdbID' element={<MovieDetail />} />
          <Route path='/movies' element={<MovieListing />} />
          <Route path='/series' element={<SeriesListing />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </section>
  )
}

export default App
