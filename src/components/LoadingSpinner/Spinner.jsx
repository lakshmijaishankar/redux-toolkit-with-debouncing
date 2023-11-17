import React from 'react'
import './Spinner.scss'
const Spinner = ({ postion, top, left, right, bottom }) => {
    return (
        <section className="circular__spinner" style={{ position: postion, top: top, left: left, right: right, bottom: bottom }}></section>
    )
}

export default Spinner