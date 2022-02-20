import React, { forwardRef } from 'react';
import "./videocard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const base_url = "https://image.tmdb.org/t/p/original/";

const Videocard = forwardRef(({ movie }, ref) => {
  return(
    <div ref={ref} className="videoCard">
    <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} />
    <TextTruncate line={1} element="p" truncateText="..." text={movie.overview}  />
    <h2>{movie.title || movie.original_name}</h2>
    <p className = "stats">


    {movie.release_date || movie.first_air_date} .

    <ThumbUpIcon />{" "}{movie.vote_count}
    </p>
    </div>
  )
});

export default Videocard;
