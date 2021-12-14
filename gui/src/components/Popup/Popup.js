import React from 'react';
import "./Popup.css";


const NOIMG = "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/58402b605cafe8877e8b456c/peliculas.jpg";
const IMAGE_API = "https://image.tmdb.org/t/p/w500";

function Popup({selectedMovie, buttomPopup, setButtomPopup}) {
    const handleOnClick = () => {
        setButtomPopup(false);
     };

    if(buttomPopup){
        return (<div className="popup"> 
                    <div className="popup-inner">
                    <img src= {selectedMovie.poster_path ? (IMAGE_API + selectedMovie.poster_path) : NOIMG } alt={selectedMovie.title} />     
                        <p onClick={handleOnClick}>TITULO: {selectedMovie.title}</p>
                    </div> 
                </div>);
    }else{
        return null;
    }
}



export default Popup;