import Api, { endpoints } from '~/configs/Api';
import cookie from 'react-cookies';

export const login = async (username, password) => {
    let res = await Api.post(endpoints['login'], {
        username: username,
        password: password,
    });
    cookie.save('token', res.data);

    let user = await authApi().get(endpoints['current-user']);
    cookie.save('user', user.data);

    dispatch({
        type: 'login',
        payload: user.data,
    });
};
