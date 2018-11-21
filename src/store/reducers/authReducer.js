const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED':
            return {
                ...state,
                authError: action.err
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            return state;
        default:
           return state;
    }    
}

export default authReducer