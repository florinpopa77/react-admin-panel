const initialState = {
    users: true
}

export function usersDisplayReducer(state = initialState, action){
    switch (action.type){
        case 'DISPLAY_USERS_POSTS':
            const newState = {
                ...state,
                users: action.payload.users
            }
            return newState;
        default:
            return state;
    }
}