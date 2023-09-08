import { useContext, useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { LoginContext } from './Login';

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

    const register = (e) => {
        e.preventDefault();

        const process = async () => {};

        process();
    };

    const change = (e, field) => {
        setUser({
            ...user,
            [field]: e.target.value,
        });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Đăng ký người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={register}>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Họ..."
                                    value={user.lastName}
                                    onChange={(e) => change(e, 'lastname')}
                                    required
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên..."
                                    value={user.firstName}
                                    onChange={(e) => change(e, 'firstname')}
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
                        <Form.Control type="file" accept="image/*" ref={avatar} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" className="w-100">
                    Đăng ký
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Register;
