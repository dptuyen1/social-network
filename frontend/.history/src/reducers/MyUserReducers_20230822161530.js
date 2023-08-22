import cookie from 'react-cookies';

const MyUserReducers = (currentState, action) => {
    switch (action.type) {
        case 'login':
            return action.payload;
        case 'logout':
            cookie;
    }

    return currentState;
};

export default MyUserReducers;
