import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="shadow rounded w-50">
                <Form className="p-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Nhập tài khoản..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Nhập mật khẩu..." />
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
