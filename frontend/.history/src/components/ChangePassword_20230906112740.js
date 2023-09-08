import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '~/App';

const ChangePassword = () => {
    const [user, dispatch] = useContext(UserContext);
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
            <div className="shadow rounded w-50"><div className="shadow rounded w-50"></div>
            </div>
        </>
    );
};

export default ChangePassword;
