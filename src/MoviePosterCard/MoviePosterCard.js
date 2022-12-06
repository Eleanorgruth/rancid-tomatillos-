import React from 'react'
import './MoviePosterCard.css'
import icon from '../images/icon.png'
import { NavLink } from 'react-router-dom'

const MoviePosterCard = ({ title, releaseDate, posterPath, averageRating, id}) => {
  return (
    // <NavLink className='movie-card-styling' >
      <section  className='movie-card-styling'>
        <img className='movie-image-styling' src={posterPath} alt={title}/>
        <p>Rating {averageRating.toFixed(1)}/10
          <img
            className='icon-styling'
            src={icon}
          />
        </p>
        <p className='released-styling'>Released {releaseDate.slice(0, 4)}</p>
      </section>
 
    )
}

export default MoviePosterCard

