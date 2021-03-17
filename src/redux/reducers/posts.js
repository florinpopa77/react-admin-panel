const initialState = {
    data: [],
    loading: false,
    error: null
};

export function postsReducer(state = initialState, action) {
    switch(action.type){
        case 'START_LOADING_POSTS':
            return {
                ...state,
                loading: true
            };
        case 'UPDATE_POST_DATA':
            return {
                loading: false,
                error: null,
                data: action.payload
            };
        case 'UPDATE_POST_ERROR':
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
            
    }
}