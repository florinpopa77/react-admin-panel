const initialState = {
    data: [],
    loading: false,
    error: null
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'START_LOADING':
            const newStateLoading = {
                ...state,
                loading: true
            }
            return newStateLoading;
        case 'UPDATE_USER_DATA':
            const newState = {
                loading: false,
                error: null,
                data: action.payload
            }
            return newState;
        case 'UPDATE_USER_ERROR':
            const newStateError = {
                loading: false,
                error: action.payload
            }
            return newStateError;
        case 'DELETE_USER':
            const filteredUsers = state.data.filter(user => user.id !== action.payload.id);
            return {
                ...state,
                data: filteredUsers
            }
        case 'ADD_USER_FORM':
            return {
                data: [
                    ...state.data,
                    {
                        ...action.payload.user
                    }
                ]
            }
        default:
            return state;
    }
}