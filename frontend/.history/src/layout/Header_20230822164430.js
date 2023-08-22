import { useContext } from 'react';
import { MyUserContext } from '../App';

const Header = () => {
    const [user, dispatch] = useContext(MyUserContext);
    return (
        <>
            {user !== null ? (
                <button type="submit" className="btn btn-success w-50">
                    Đăng xuất
                </button>
            ) : (
                <></>
            )}
        </>
    );
};

export default Header;
