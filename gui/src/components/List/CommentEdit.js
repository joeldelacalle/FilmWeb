import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const CommentEdit = () => {
    const [content, setContent] = useState("");
    const createComment = ({ content, postId}) => {
        //Realizar con mi clase comentario de la api de flask
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("===")

        //Post API(Comentarios Flask) CALL
    };
    return (
        <Form onSubmit={onSubmitHandler}>
            <FloatingLabel label="Comments">
                <Form.Control
                    typeof="text" 
                    id="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    aria-describedby="content-helper-text"
                ></Form.Control>
                <Button type="submit" variant="primary">Comentar</Button>
            </FloatingLabel>
        </Form>
        
         
    );
};
export default CommentEdit;