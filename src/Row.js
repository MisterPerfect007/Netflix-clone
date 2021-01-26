import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, isLarge }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const [playTrailer, setPlayTrailer] = useState(false)

    useEffect(() => {
        async function fetchMovies(){
            const response = await axios.get(fetchURL);
            setMovies(response.data.results);
        }
        fetchMovies()
    }, [fetchURL])

    async function onClick(movie) {
        movieTrailer(movie.name || movie.title)
            .then( (url) => setTrailerUrl(url) )
            .catch( console.error )
        if(playTrailer || !trailerUrl){
            setPlayTrailer(false)
        }
        else setPlayTrailer(true)
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__container">
                {movies.map(movie => {
                    if(movie.poster_path && movie.backdrop_path) {
                        return <img
                                onClick={() => onClick(movie)}
                                key={movie.id}
                                className={`${isLarge? "row__smallImage row__image" : 'row__largeImage row__image'}`}
                                src={`${base_url}${isLarge? movie.backdrop_path : movie.poster_path}`}
                                alt={movie.name}
                            />
                    }
                    return ''
                })}
            </div>
                {playTrailer && <ReactPlayer
                    url={trailerUrl}
                    width="100%"
                    playing={true}
                    controls={true}
                    config={{
                        youtube: {
                        playerVars: { showinfo: 0 }
                        }
                    }}
                />}
        </div>
    )
}

export default Row
