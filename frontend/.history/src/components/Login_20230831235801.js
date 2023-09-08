import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <div className="shadow rounded w-25">
                <Form className="p-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Nhập tài khoản..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Nhập mật khẩu..." />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Đăng nhập
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default Login;
