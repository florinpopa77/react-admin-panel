import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

function UserList(props) {
    const { users } = props;
    
    return (
        <div>
            <h2>Lista utilizatorilor:</h2> 
            <div className="d-flex flex-row flex-wrap justify-content-between">
                {users.map((user, index) => {
                    return <UserItem
                        id={ user.id }
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        salary={user.salary}
                        imgLogo={user.imgLogo}
                        key={ user.id }
                    />
                })}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        users: state.users.data
    }
  }

export default connect(mapStateToProps)(UserList);
