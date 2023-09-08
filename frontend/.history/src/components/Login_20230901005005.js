import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Api, { authApi, endpoints } from '~/configs/Api';
import cookie from 'react-cookies';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const login = (e) => {
        e.preventDefault();

        const process = async () => {
            let res = await Api.post(endpoints['login'], {
                username: username,
                password: password,
            });
            cookie.save('token', res.data);

            let user = await authApi().get(endpoints['current-user']);
        };

        process();
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
            <div className="shadow rounded w-50">
                <Form className="p-3" onSubmit={login}>
                    <h5 className="text-center mb-3">Đăng nhập hệ thống</h5>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Nhập tài khoản..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Nhập mật khẩu..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary w-100" type="submit">
                        Đăng nhập
                    </Button>

                    <hr className="my-3" />

                    <div className="text-center">
                        <Button className="w-25" variant="success" type="submit">
                            Tạo tài khoản
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
