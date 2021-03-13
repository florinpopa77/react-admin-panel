import React from 'react';

function UserItem(props) {
    const {id, name, email, isGoldClient, salary, imgLogo} = props;

    
    return (
        <div>
            <img src={imgLogo} alt=""></img>
            <h3>{ name }</h3>
            <p>{ email }</p>
            <p>Salary: {salary}</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <button onClick={() => props.handleDeleteUser(id)}>Delete</button>
        </div>
    );
}

export default UserItem;