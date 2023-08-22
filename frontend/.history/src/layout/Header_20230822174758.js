import { useContext } from 'react';
import { MyUserContext } from '../App';
import { Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                                ></img>
                                <ul className="dropdown-menu text-center" style={{ width: '300px' }}>
                                    <li>
                                        <button className="btn">Xem trang cá nhân</button>
                                    </li>
                                    <li className="">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <button className="btn" onClick={logout}>
                                            Đăng xuất
                                        </button>
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