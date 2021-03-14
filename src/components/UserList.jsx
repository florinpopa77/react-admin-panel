import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const { users, handleDeleteUser } = props;
    
//"col-12 col-md-6 my-3"
// className="d-flex flex-wrap justify-content-between"
    return (
        <div>
            <h2>Lista utilizatorilor:</h2> 
            <div className="d-flex flex-row flex-wrap justify-content-between">
                { users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={user.salary}
                        imgLogo={user.imgLogo}
                        handleDeleteUser={handleDeleteUser}
                        key={ index }
                    />
                })}
            </div>
        </div>
    );
}

export default UserList;