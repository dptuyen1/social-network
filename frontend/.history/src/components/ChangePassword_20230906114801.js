import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '~/App';

const ChangePassword = () => {
    const [user, dispatch] = useContext(UserContext);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const changePassword = () => {
        const process = async () => {};

        process();
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                <div className="shadow rounded w-50">
                    <Form className="p-3" onSubmit={changePassword}>
                        <h5 className="text-center mb-3">Đổi mật khẩu</h5>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" readOnly value={user.username} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu hiện tại"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu mới"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
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
