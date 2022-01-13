import React ,{useState } from 'react';
import "./CommentPopup.css";
import Comment from '../List/Comment';
import CommentEdit from '../List/CommentEdit';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/esm/Button';

function CommentPopup({selectedMovie, comPopup, setComPopup,user}) {
    const [content, setContent] = useState("");
    const onSubmitHandler = (event) => {
        event.preventDefault();
    };
    const handleButtonOnClick = () => {
        setComPopup(false);
     };

    if(comPopup){
        return (<div className="comPopup"> 
                    <div className="comPopup-inner">
                        
                        <Button variant="danger" onClick={handleButtonOnClick}>CLOSE</Button>
                        <CommentEdit setComPopup={setComPopup} selectedMovie={selectedMovie} user={user}  />
                        
                    </div> 
                </div>);
    }else{
        return null;
    }
}

export default CommentPopup;