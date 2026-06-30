import React from 'react';
import styles from './MovieCard.module.css';
import { FaCirclePlay } from 'react-icons/fa6';
import { BsPlusCircle } from 'react-icons/bs';
import { GoCheckCircleFill } from 'react-icons/go';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

import { movies } from './../../Data/Data';

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  // Fallback array for genres
  let genres = ['Adventure', 'Action', 'Thriller'];

  return (
    <div className={styles.cardwrapper}>
      
      {/* Default Poster Image (Visible before hover) */}
      <img  
        className={styles.poster} 
        src={`${IMAGE_BASE}${movie.poster_path}`} 
        alt={movie.title || "Movie Poster"} 
      />
      
      {/* Hover Card (Reveals details on mouse hover via CSS) */}
      <div className={styles.hovercard}>
        {/* Hover Image */}
        <img 
          className={styles.hoverImage} 
          src={`${IMAGE_BASE}${movie.poster_path}`} 
          alt="Hover layout" 
        />

        {/* Badge */}
        <div className={styles.budge}>Recently added</div>

        {/* Button Row */}
        <div className={styles.buttonRow}>
          <FaCirclePlay className={styles.circleButton} color="white" size={20} />
          <BsPlusCircle className={styles.circleButton} color="white" size={20} />
          <GoCheckCircleFill className={styles.circleButton} color="white" size={20} />
          <IoIosArrowDropdownCircle className={styles.Icon} color="white" size={20} />
        </div>
 
        {/* Metadata Row */}
        <div className={styles.metadataRow}>
          <span className={styles.tag}>U/A 16++</span>
          <span className={styles.tag}>Movies</span>
          <span className={styles.tag}>HD</span>  
        </div>

        {/* Genres */}
        <div className={styles.genres}> 
          {genres.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}> • </span>
                )}
              </span>
            );
          })}
        </div>  
      </div>

    </div>
  );
}

export default MovieCard;