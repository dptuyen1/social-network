import { useContext } from 'react';
import { MyUserContext } from '../App';

const Header = () => {
    const [user, dispatch] = useContext(MyUserContext);
    return (
        <>
            {user === null ? (
                <h1>Header</h1>
            ) : (
                <button type="submit" className="btn btn-success w-50">
                    Đăng xuất
                </button>
            )}
        </>
    );
};

export default Header;
