import { useContext } from 'react';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '~/App';

const Header = () => {
    const [user, dispatch] = useContext(UserContext);
    const menuAvatar = user === null ? null : <Image src={user.avatar} roundedCircle className="img-40" />;
    const nav = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'logout' });
        nav('/login');
    };

    const changePassword = () => {
        nav('/change-password');
    };

    const profile = () => {
        nav(`/profile/${user.username}`);
    };

    const home = () => {
        nav('/');
    };

    return (
        <>
            <Navbar sticky="top" expand="lg" className="shadow-sm bg-white">
                <Container>
                    <Navbar.Brand href="/" onClick={home}>
                        OU's Alumni Network
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {user !== null && (
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title={menuAvatar} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={profile}>Trang cá nhân</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={changePassword}>Đổi mật khẩu</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>Đăng xuất</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    )}
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
