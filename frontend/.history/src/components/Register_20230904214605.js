import { useContext, useState } from 'react';
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

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Đăng ký người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Họ..."
                                    value={user.lastName}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Tên..." value={user.firstName} />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập email..." value={user.email} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mã số sinh viên</Form.Label>
                        <Form.Control type="text" placeholder="Nhập mã số sinh viên..." value={user.id} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tài khoản</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tài khoản..." value={user.username} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu..." value={user.password} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Xác nhận mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Xác nhận mật khẩu..." value={user.confirmPassword} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Đăng ký
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Register;
