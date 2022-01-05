import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const CommentEdit = ({setComPopup}) => {
    const [text, setText] = useState("");
    const createComment = ({ content, postId}) => {
        //Realizar con mi clase comentario de la api de flask
    }
    const handleExpand = (e) => {
        e.target.style.height = "inherit";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const handleOnChangeText = (e) => {
        setText(e.target.value);
        handleExpand(e);
    };
    const handleOnClick = (e) => {
        //Llamada API
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