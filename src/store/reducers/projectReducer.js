const initState = {
    projects: [
        { id: 1, title: 'Project 1', content: 'My project' },
        { id: 2, title: 'Project 2', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 3, title: 'Project 3', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 4, title: 'Project 4', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 5, title: 'Project 5', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 6, title: 'Project 6', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 7, title: 'Project 7', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 8, title: 'Project 8', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 9, title: 'Project 9', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' },
        { id: 10, title: 'Project 10', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repudiandae veritatis sed numquam quo in, eum dolorem officia aperiam provident expedita veniam maxime vitae doloremque? Numquam earum libero minus ipsum?' }
    ]
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