import { useContext } from 'react';
import { MyUserContext } from '../App';
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
                            <div class="dropdown text-end">
                                <Link
                                    class="d-block link-dark text-decoration-none dropdown-toggle"
                                    id="dropdownUser1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://github.com/mdo.png"
                                        alt="mdo"
                                        width="32"
                                        height="32"
                                        class="rounded-circle"
                                    />
                                </Link>
                                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li>
                                        <Link class="dropdown-item" href="#">
                                            New project...
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" href="#">
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" href="#">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" href="#">
                                            Sign out
                                        </Link>
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
