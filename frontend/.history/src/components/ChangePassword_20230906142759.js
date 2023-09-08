import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '~/App';
import { authApi, endpoints } from '~/configs/Api';

const ChangePassword = () => {
    const [user, dispatch] = useContext(UserContext);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const nav = useNavigate();

    const changePassword = (e) => {
        e.preventDefault();

        const process = async () => {
            try {
                let res = await authApi().post(endpoints['auth-user'], {
                    username: user.username,
                    password: currentPassword,
                });

                if (res.status === 200) {
                    try {
                        let response = await authApi().put(endpoints['change-password'](user.username), {
                            password: newPassword,
                        });

                        if (response.status === 202) {
                            setTimeout(() => {
                                setMsg('Đổi mật khẩu thành công!');
                                dispatch({
                                    type: 'logout',
                                });
                                nav('/login');
                            }, 3000);
                        }
                    } catch (err) {
                        console.log(err);
                        setMsg('Có lỗi xảy ra, vui lòng thử lại!');
                    }
                }
            } catch (error) {
                console.log(error);
                setMsg('Mật khẩu hiện tại không đúng!');
            }
        };

        if (currentPassword !== '' && newPassword !== '' && confirmPassword !== '') {
            if (confirmPassword !== newPassword) setMsg('Mật khẩu mới không khớp!');
            process();
        } else setMsg('Vui lòng nhập đầy đủ thông tin!');
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                <div className="shadow rounded w-50">
                    <Form className="p-3" onSubmit={changePassword}>
                        <h5 className="text-center mb-3">Đổi mật khẩu</h5>
                        {msg !== '' && <h5 className="text-center text-danger mb-3">{msg}</h5>}
                        <Form.Group className="mb-3">
                            <Form.Control type="text" readOnly value={user.username} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu hiện tại..."
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Nhập mật khẩu mới..."
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Xác nhận mật khẩu mới..."
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
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
