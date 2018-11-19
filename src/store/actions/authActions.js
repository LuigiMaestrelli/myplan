export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase} ) => {
        getFirebase().auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: 'LOGIN_SUCCESS'
            });
        }).catch(err => {
            dispatch({
                type: 'LOGIN_FAILED',
                err
            });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        getFirebase().auth().signOut()
            .then(() => {
                dispatch({
                    type: 'SIGNOUT_SUCCESS'
                });
            });
    }
}