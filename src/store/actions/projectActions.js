export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        let projectToSave = {
            ...project,
            authorFirstName: 'Luigi',
            authorLastName: 'Maestrelli',
            auhtorId: 123456,
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