import React ,{useState } from 'react';
import "./CommentPopup.css";
import CommentList from '../List/CommentList';
import CommentEdit from '../List/CommentEdit';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';

function CommentPopup({selectedMovie, comPopup, setComPopup}) {
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
                        <p onClick={handleButtonOnClick}>TITULO: {selectedMovie.title}</p>
                        <CommentEdit setComPopup={setComPopup} title={selectedMovie.title} />
                        
                    </div> 
                </div>);
    }else{
        return null;
    }
}

export default CommentPopup;