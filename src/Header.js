import React, { useEffect, useState } from 'react'
import './Header.css';
import axios from './axios';
import TextTruncate from 'react-text-truncate';

const base_url = "https://image.tmdb.org/t/p/original";


function Header({ fetchURL }) {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchURL);
            const movies = response.data.results;
            let index = Math.floor(Math.random() * movies.length);
            setMovie(movies[index])
        }
        fetchData()
        
    },[fetchURL])
    
    return (
        <div 
            className="header"
            style={{backgroundImage: `url("${base_url}${movie.backdrop_path}")`}}
        >
            <div className="header__container">
                <h1 className="header__title">{movie.name || movie.title}</h1>
                <button className="header__button">Play</button>
                <button className="header__button">My List</button>
                <div className="header__overview">
                    <TextTruncate 
                        line={3}
                        element="p"
                        truncateText="..."
                        text={movie.overview} 
                    />
                </div>

            </div>
            
        </div>
    )
}

export default Header
