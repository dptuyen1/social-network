import { useContext } from 'react';
import { MyUserContext } from '../App';

const Header = () => {
    const [user, dispatch] = useContext(MyUserContext);

    const logout = () => {
        dispatch({
            type: 'logout',
        });
    };
    return (
        <>
            {user !== null ? (
                <>
                    <button type="submit" className="btn btn-success w-50" onClick={logout}>
                        Đăng xuất
                    </button>
                    <img src={user.avatar} alt=""></img>
                    <h1>{user.username}</h1>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default Header;