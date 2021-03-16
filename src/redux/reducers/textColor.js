const initialState = {
    color: 'red'
}

export function textColorReducer(state = initialState, action){
    switch (action.type){
        case 'CHANGE_TEXT_COLOR':
            const newState = {
                ...state,
                color: action.payload.color
            }
            return newState;
        default:
            return state;

    }
}