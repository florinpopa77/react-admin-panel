import React from 'react';
import './UserItem.css';

function UserItem(props) {
    const {id, name, email, isGoldClient, salary, imgLogo} = props;

    
    return (
        <div className="card card-user text-center mb-3">
            <img className="card-img-top img-logo" src={imgLogo} alt=""/>
            <div className="card-body">
                <h3 className="card-title">{ name }</h3>
                <p className="card-text">{ email }</p>
                <p className="card-text">Salary: {salary}</p>
                { isGoldClient
                    ? <h3 className="card-title">Client GOLD</h3>
                    : null
                }
                <button className="btn btn-primary" onClick={() => props.handleDeleteUser(id)}>Delete</button>
            </div>
        </div>        
        
       
    );
}

export default UserItem;