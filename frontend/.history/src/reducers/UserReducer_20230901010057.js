const UserReducer = (currentState, action) => {
    switch (action.type) {
        case 'login':
            return action.payload;
    }
};

export default UserReducer;
