const startLoading = () => {
    return {
        type: 'START_LOADING'
    }
}

const updateUserData = (payload) => {
    return {
        type: 'UPDATE_USER_DATA',
        payload: payload
    }
}

const updateUserError = (payload) => {
    return {
        type: 'UPDATE_USER_ERROR',
        payload: payload
    }
}

export function getUsers() {
 
    return (dispatch) => {
        dispatch(startLoading());

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                data = data.filter(user => user.id < 10);
                data.forEach(user => {
                  user.isGoldClient = false;
                  user.salary = 1000;
                  user.imgLogo = "https://img.pngio.com/bluecircleclip-artsymbollogographics-4367591-free-png-library-user-logo-png-250_250.png"
                })
                dispatch(updateUserData(data));
                
            })
            .catch(error => {
                dispatch(updateUserError(error));
            })
    }
}

export function deleteUser(payload){
    return {
        type: 'DELETE_USER',
        payload
    }
}

export function addUser(payload){
    return {
        type: 'ADD_USER_FORM',
        payload
    }
}
