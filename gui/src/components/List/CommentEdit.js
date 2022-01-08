import React, { useEffect, useState } from "react";
import {postComments,getFilmComments} from '../../APIService';
import Comment from "./Comment";
const CommentEdit = ({setComPopup, selectedMovie}) => {
    const [text, setText] = useState(" ");
    const [usuario, setUsuario] = useState("livio");
    const [email, setEmail] = useState("liv@liv.com");
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
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("===");
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
      
     <button onClick={handleOnClick}>
        Send
     </button>

     <ul>
       {loaded ? comentarios.map((comment, index) => (
         <Comment key= {index} comment= {comment}/>
       )):null}

     </ul>
    </div>
        
         
    );
};
export default CommentEdit;