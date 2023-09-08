import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '~/App';

const ChangePassword = () => {
    const [user, dispatch] = useContext(UserContext);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                <div className="shadow rounded w-50">
                    <Form className="p-3">
                        <h5 className="text-center mb-3">Đổi mật khẩu</h5>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" readOnly value={user.username} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu hiện tại"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Nhập mật khẩu mới" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Xác nhận mật khẩu mới" />
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
