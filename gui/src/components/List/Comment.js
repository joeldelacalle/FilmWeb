import { User } from "@auth0/auth0-react";
import React from "react";

const Comment = ({comment}) => {
    return (
        <li>
            {comment.nomUsuario}: {comment.comentario}
        </li>
    )
};

export default Comment;