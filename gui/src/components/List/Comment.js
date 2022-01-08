import React from "react";

const Comment = ({comment}) => {
    return (
        <li>
            {comment.comentario}
        </li>
    )
};

export default Comment;