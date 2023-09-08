export const login = async () => {
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
