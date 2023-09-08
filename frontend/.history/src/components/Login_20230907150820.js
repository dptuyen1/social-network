import { createContext, useContext, useState } from 'react';
import { Button, Col, Form, Row, Toast } from 'react-bootstrap';
import Api, { authApi, endpoints } from '~/configs/Api';
import cookie from 'react-cookies';
import { UserContext } from '~/App';
import { Navigate } from 'react-router-dom';
import Register from './Register';

export const LoginContext = createContext();

const Login = () => {
    const [user, dispatch] = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState();

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

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
                setMsg('Tài khoản hoặc mật khẩu không đúng!');
            }
        };

        if (username !== '' && password !== '') process();
        else setMsg('Vui lòng nhập đầy đủ thông tin!');
    };

    if (user !== null) return <Navigate to="/" />;

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                <div className="shadow rounded w-50">
                    <Form className="p-3" onSubmit={handleLogin}>
                        <h5 className="text-center mb-3">Đăng nhập hệ thống</h5>
                        {msg !== null && <h5 className="text-center text-danger mb-3">{msg}</h5>}
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

                <LoginContext.Provider value={[show, setShow]}>
                    <Register />
                </LoginContext.Provider>
            </div>

            <Row>
                <Col md={6} className="mb-2">
                    <Button onClick={toggleShowA} className="mb-2">
                        Toggle Toast <strong>with</strong> Animation
                    </Button>
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>
                            Tài khoản của bạn đã bị khóa, vui lòng liên hệ quản trị viên để được mở khóa
                        </Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </>
    );
};

export default Login;
