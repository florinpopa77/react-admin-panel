const startLoading = () => {
    return {
        type: 'START_LOADING_POSTS'
    }
}

const updatePostData = (payload) => {
    return {
        type: 'UPDATE_POST_DATA',
        payload: payload
    }
}

const updatePostError = (payload) => {
    return {
        type: 'UPDATE_POST_ERROR',
        payload: payload
    }
}

export function getPosts() {
    return (dispatch) => {
        dispatch(startLoading());

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch(updatePostData(data)))
        .catch(error => {
            dispatch(updatePostError(error));
        });
    }
}
