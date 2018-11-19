const initState = {
    projects: []
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
            break;

        case 'CREATE_PROJECT_ERROR':
            console.error('error when creating the project', action.err)
            break;

        default:
            break;
    }

    return state;
}

export default projectReducer;