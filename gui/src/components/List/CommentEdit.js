import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import {postComments,getFilmComments} from '../../APIService';
import Comment from "./Comment";
const CommentEdit = ({setComPopup, selectedMovie, user}) => {
    const [text, setText] = useState(" ");
    const [usuario, setUsuario] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [comentarios, setComentarios] = useState([{}]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
      if (!loaded) {
        getFilmComments(selectedMovie.id,comentarios,setComentarios,loaded,setLoaded);
      }},[selectedMovie.id,comentarios,setComentarios, setLoaded,loaded])
    const handleExpand = (e) => {
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };
    const handleOnChangeText = (e) => {
        setText(e.target.value);
        handleExpand(e);
    };
    const handleOnClick = () => {
        //Llamada API
        postComments(selectedMovie.title,selectedMovie.id, usuario, email, text)
        setComPopup(false)
      };
    return (
    <div>
      <textarea
        type="text"
        name="text"
        id="text"
        value={text}
        autoComplete="off"
        onChange={handleOnChangeText}
        placeholder="Add Text..."
      />
      
     <Button onClick={handleOnClick}>
        SEND
     </Button>

     <ul>
       {loaded ? comentarios.map((comment, index) => (
         <Comment key= {index} comment= {comment}/>
       )):null}

     </ul>
    </div>
        
         
    );
};
export default CommentEdit;