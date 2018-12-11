export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const userProfile = getState().firebase.profile;

        let projectToSave = {
            ...project,
            authorFirstName: userProfile.firstName,
            authorLastName: userProfile.lastName,
            auhtorId: getState().firebase.auth.uid,
            createdAt: new Date()
        }

        getFirestore().collection('projects').add({
            ...projectToSave
        }).then((data) => {
            projectToSave.id = data.id;

            dispatch({
                type: 'CREATE_PROJECT',
                projectToSave
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            });
        });
    };
}