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
                <header class="p-3 mb-3 border-bottom">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-end">
                            <div class="dropdown">
                                <img
                                    src={user.avatar}
                                    alt=""
                                    class="dropdown-toggle rounded-circle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ width: '40px' }}
                                ></img>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link>Test</Link>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            Another action
                                        </a>
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
