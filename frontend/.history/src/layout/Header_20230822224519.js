import { useContext } from 'react';
import { MyUserContext } from '../App';

const Header = () => {
    const [user, dispatch] = useContext(MyUserContext);

    const logout = () => {
        dispatch({
            type: 'logout',
        });
    };

    if (user !== null)
        return (
            <>
                {user !== null ? (
                    <header className="p-3 mb-3 border-bottom">
                        <div className="container">
                            <div className="d-flex flex-wrap align-items-center justify-content-end">
                                <div className="dropdown">
                                    <img
                                        src={user.avatar}
                                        alt=""
                                        className="dropdown-toggle rounded-circle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ width: '40px' }}
                                        role="button"
                                    ></img>
                                    <ul className="dropdown-menu text-center" style={{ width: '300px' }}>
                                        <li>
                                            <button className="btn dropdown-item">Xem trang cá nhân</button>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-center dropdown-item">
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                                <button className="btn" onClick={logout}>
                                                    Đăng xuất
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                ) : (
                    <></>
                )}
            </>
        );
};

export default Header;
