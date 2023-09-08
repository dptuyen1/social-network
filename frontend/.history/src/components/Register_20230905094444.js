import { useContext, useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { LoginContext } from './Login';
import Api, { endpoints } from '~/configs/Api';

const Register = () => {
    const [show, setShow] = useContext(LoginContext);

    const handleClose = () => setShow(false);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        id: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const avatar = useRef();
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState('');

    const register = () => {
        const process = async () => {
            try {
                let form = new FormData();

                for (let field in user) {
                    if (field !== 'confirmPassword' || field !== 'id') {
                        form.append(field, user[field]);
                    }
                }

                form.append('avatar', avatar.current.files[0]);

                let res = await Api.post(endpoints['register'], form);

                setLoading(!loading);

                if (res.status === 201) handleClose();
            } catch (err) {
                console.log(err);
            }
        };

        if (checkEmpty()) {
            if (user.password === user.confirmPassword) process();
            else {
                setMsg('Mật khẩu không khớp');
            }
        }
    };

    const change = (e, field) => {
        setUser({
            ...user,
            [field]: e.target.value,
        });
    };

    const checkEmpty = () => {
        for (let field in user) {
            if (user[field] === '') {
                return false;
            }
            return true;
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h6>Đăng ký người dùng</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {msg !== null && <h5 className="text-center text-danger mb-3">{msg}</h5>}
                    <Form>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Họ..."
                                        value={user.lastName}
                                        onChange={(e) => change(e, 'lastName')}
                                        required
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên..."
                                        value={user.firstName}
                                        onChange={(e) => change(e, 'firstName')}
                                        required
                                    />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Nhập email..."
                                value={user.email}
                                onChange={(e) => change(e, 'email')}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mã số sinh viên</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập mã số sinh viên..."
                                value={user.id}
                                onChange={(e) => change(e, 'id')}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Tài khoản</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tài khoản..."
                                value={user.username}
                                onChange={(e) => change(e, 'username')}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu..."
                                value={user.password}
                                onChange={(e) => change(e, 'password')}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Xác nhận mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Xác nhận mật khẩu..."
                                value={user.confirmPassword}
                                onChange={(e) => change(e, 'confirmPassword')}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Ảnh đại diện</Form.Label>
                            <Form.Control type="file" accept="image/*" ref={avatar} required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {loading === true ? (
                        <Button variant="success" className="w-100" type="button" disabled>
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                            <span className="ms-2">Đăng ký</span>
                        </Button>
                    ) : (
                        <Button variant="success" className="w-100" type="button" onClick={register}>
                            Đăng ký
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Register;
