import { createContext, useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Api, { authApi, endpoints } from '~/configs/Api';
import cookie from 'react-cookies';
import { UserContext } from '~/App';
import { Navigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Register from './Register';

export const LoginContext = createContext();

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
                        <Button className="w-25" variant="success" onClick={handleShow}>
                            Tạo tài khoản
                        </Button>
                    </div>
                </Form>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Đăng ký người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Control type="text" placeholder="Họ..." />
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Tên..." />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Nhập email..." />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mã số sinh viên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập mã số sinh viên..." />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Tài khoản</Form.Label>
                            <Form.Control type="text" placeholder="Nhập tài khoản..." />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control type="password" placeholder="Nhập mật khẩu..." />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Xác nhận mật khẩu</Form.Label>
                            <Form.Control type="password" placeholder="Xác nhận mật khẩu..." />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Đăng ký
                    </Button>
                </Modal.Footer>
            </Modal>

            <LoginContext.Provider>
                <Register />
            </LoginContext.Provider>
        </div>
    );
};

export default Login;
