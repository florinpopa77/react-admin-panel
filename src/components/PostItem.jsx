import React from 'react';
import './PostItem.css';

function PostItem(props){
    const {userId, id, title, body} = props;

    return(
        <div className="card card-css mb-4">
            <div className="card-body">
                <h3 className="card-title">{id} {title}</h3>
                <h6 className="card-subtitle mb-2 text-muted">User ID: {userId}</h6>
                <p className="card-text">{body}</p>
            </div>
        </div>
    );
}

export default PostItem;