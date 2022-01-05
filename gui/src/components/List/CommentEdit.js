import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import {postComments} from '../../APIService';
const CommentEdit = ({setComPopup, title}) => {
    const [text, setText] = useState(" ");
    const [usuario, setUsuario] = useState("livio");
    const [email, setEmail] = useState("liv@liv.com");

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
        postComments(title, usuario, email, text)
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
    </div>
        
         
    );
};
export default CommentEdit;