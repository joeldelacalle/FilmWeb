import React from "react";
import Button from 'react-bootstrap/Button';

const NOIMG = "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/58402b605cafe8877e8b456c/peliculas.jpg";
const IMAGE_API = "https://image.tmdb.org/t/p/w500";


const setVoteDisplay = (vote) =>{
    if(vote >= 9){
        return "gold";
    }else if(vote >= 7.5){
        return "green";
    }else if( vote >= 6){
        return "orange";
    }else{
        return "red";
    }
}

const Movie = ({
    title, poster_path, overview, vote_average, movie, setSelectedMovie, setButtomPopup, setComPopup
}) => {
    
    const handleOnClick = () => {
        setSelectedMovie(movie);
        setButtomPopup(true);
    
        console.log(movie);
     };

     const handleButtonOnClick = () => {
        setSelectedMovie(movie);
        setComPopup(true);
     };

    return (   
        <div className="movie">
            <img onClick={handleOnClick}
                src= {poster_path ? (IMAGE_API + poster_path) : NOIMG } alt={title} />     
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`vote ${setVoteDisplay(vote_average)}`}>
                    {vote_average}
                </span>
            </div>   
    
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>

            <div className="comments-button">
            <Button variant="success" onClick={handleButtonOnClick}>COMENTARIOS</Button> 
            </div>
        </div>      
    );}

export default Movie;