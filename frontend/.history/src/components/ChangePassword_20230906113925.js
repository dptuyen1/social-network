import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '~/App';

const ChangePassword = () => {
    const [user, dispatch] = useContext(UserContext);
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                <div className="shadow rounded w-50">
                    <Form className="p-3">
                        <h5 className="text-center mb-3">Đổi mật khẩu</h5>
                        <Form.Group className="mb-3">
                            <Form.Label>Tài khoản</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu hiện tại</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu mới</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Xác nhận mật khẩu</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Đổi mật khẩu
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default ChangePassword;
