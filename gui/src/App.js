import React, { useEffect, useState } from "react";
import Movie from './components/Movie';
import Popup from './components/Popup/Popup';
import CommentPopup from './components/Popup/CommentPopup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginButton } from './components/Users/Login';
import { LogoutButton } from './components/Users/Logout';
import { Profile } from './components/Users/Profile';
import { useAuth0 } from "@auth0/auth0-react";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9bac13049c867a8efce25b6de5bb8949&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=9bac13049c867a8efce25b6de5bb8949&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({}); 
  const [searchTerm, setSearchTerm] = useState('');
  const [buttomPopup, setButtomPopup] = useState(false);
  const [comPopup, setComPopup] = useState(false);
  const [comentario, setComentario] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  useEffect(()=>{
    fetch('http://localhost:5000/comentarios',{
      'methods':'POST',
      headers : {
        'Content-Type':'application/json'
      }
    })
    .then(response => response.json())
    .then(response => setComentario(response))
    .catch(error => console.log(error))

},[])
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies =(API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
   e.preventDefault();
   if(searchTerm){
      getMovies(SEARCH_API + searchTerm);
      
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  return ( 
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header>
        <h1>MOVIEGOER</h1>
        <LoginButton />
        <Profile user={user} isAuthenticated={isAuthenticated} isLoading={isLoading} />
        <LogoutButton />
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
           
          />
        </form>  
      </header>
      <Popup selectedMovie={selectedMovie} buttomPopup={buttomPopup} setButtomPopup={setButtomPopup}/>
      <CommentPopup selectedMovie={selectedMovie} comPopup={comPopup} setComPopup={setComPopup} user={user}/>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} setSelectedMovie={setSelectedMovie} 
          movie = {movie} setButtomPopup={setButtomPopup} setComPopup={setComPopup} user = {user}/>)
        )}
      </div>
    </>
  ); 
}

export default App;
