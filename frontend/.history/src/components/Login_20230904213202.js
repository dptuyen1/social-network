import { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Api, { authApi, endpoints } from '~/configs/Api';
import cookie from 'react-cookies';
import { UserContext } from '~/App';
import { Navigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Register from './Register';

const Login = () => {
    const [user, dispatch] = useContext(UserContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = (e) => {
        e.preventDefault();

        const process = async () => {
            try {
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
            } catch (error) {
                console.log(error);
            }
        };

        process();
    };

    if (user !== null) return <Navigate to="/" />;

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
            <div className="shadow rounded w-50">
                <Form className="p-3" onSubmit={handleLogin}>
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
                        <Button className="w-25" variant="success" type="submit" onClick={handleShow}>
                            Tạo tài khoản
                        </Button>
                    </div>
                </Form>
            </div>

            <Register
                props={{
                    show: show,
                    setShow: setShow,
                    handleShow: handleShow,
                    handleClose: handleClose,
                }}
            />
        </div>
    );
};

export default Login;
