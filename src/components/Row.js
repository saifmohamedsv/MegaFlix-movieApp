import React, { useState, useEffect } from 'react'
import axios from '../axios'
import '../styles/Row.scss'

// base image's url of tmdb API
const img_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    // A snippet which runs based on a specific condition/variable
    useEffect(() => {
        //if [] is empty, run once when the row loads, and don't run again 
        //if [movies], run once when row loads, and runs every single time 'movies' changes
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img className="row__poster" src={`${img_url}${movie.poster_path}`} alt={movie.original_title} />
                ))}
            </div>
        </div>
    )
}

export default Row
