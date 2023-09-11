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
                let res = await Api.get(endpoints['existed-user'](user.username));

                console.log(res.status);

                if (res.status === 200) {
                    try {
                        let form = new FormData();

                        for (let field in user) {
                            if (field !== 'confirmPassword' || field !== 'id') {
                                form.append(field, user[field]);
                            }
                        }

                        form.append('avatar', avatar.current.files[0]);

                        setLoading(!loading);

                        let response = await Api.post(endpoints['register'], form);

                        if (response.status === 201) {
                            handleClose();
                            setLoading(!loading);
                            setUser({});
                        }
                    } catch (err) {
                        console.log(err);
                        setMsg('Có lỗi xảy ra, vui lòng thử lại...');
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                    }
                } else if (res.status === 226) {
                    setMsg('Tài khoản đã tồn tại, vui lòng sử dụng tài khoản khác...');
                }
            } catch (err) {
                console.log(err);
                setMsg('Có lỗi xảy ra, vui lòng thử lại...');
            }
        };

        if (checkEmpty()) {
            if (user.id < 10) setMsg('Mã số sinh viên có 10 số!');
            else {
                if (!checkId(user.id)) setMsg('Vui lòng nhập đúng mã số sinh viên!');
                else {
                    if (user.password === user.confirmPassword) process();
                    else {
                        setMsg('Mật khẩu không khớp!');
                    }
                }
            }
        } else {
            setMsg('Vui lòng nhập đủ thông tin bên dưới!');
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
            if (user[field].trim() === '') return false;
        }
        return true;
    };

    const checkId = (id) => {
        let date = new Date();
        let year = date.getFullYear();
        year = parseInt(year.toString().substring(2));
        id = parseInt(id.toString().substring(0, 2));

        return id <= year;
    };

    // const existedUser = (username) => {
    //     const process = async () => {
    //         try {
    //             let res = await Api.get(endpoints['existed-user'](username));

    //             return res.status;
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     process();
    // };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h6>Đăng ký người dùng</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {msg !== '' && <h6 className="text-center text-danger mb-3">{msg}</h6>}

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
                                minLength={10}
                                maxLength={10}
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
                    <Button variant="success" className="w-100" type="button" onClick={register} disabled={loading}>
                        {loading === true && (
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                className="me-2"
                            />
                        )}
                        Đăng ký
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Register;
