import React from 'react'

function PostItem(props){
    const {userId, id, title, body} = props;

    return(
        <div>
            <h3>{id} {title}</h3>
            <p>{body}</p>
            <p>User ID: {userId}</p>
        </div>
    )
}

export default PostItem;