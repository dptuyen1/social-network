import { useContext } from 'react';
import { MyUserContext } from '../App';
import { Dropdown } from 'react-bootstrap';

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
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/logout">Đăng xuất</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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
