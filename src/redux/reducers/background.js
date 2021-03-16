const initialState = {
    color: 'white'
}

export function backgroundReducer(state = initialState, action){
    switch (action.type){
        case 'CHANGE_BACKGROUND':
            const newState = {
                ...state,
                color: action.payload.color
            }
            return newState;
        default:
            return state;
    }
}