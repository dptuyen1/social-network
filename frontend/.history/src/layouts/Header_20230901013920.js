import { useContext } from 'react';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { UserContext } from '~/App';

const Header = () => {
    const [user, dispatch] = useContext(UserContext);
    const menuAvatar = user === null ? null : <Image src={user.avatar} roundedCircle className="img-40" />;

    return (
        <>
            <Navbar sticky="top" expand="lg" className="shadow-sm bg-white">
                <Container>
                    <Navbar.Brand href="#home">OU's Alumni Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title={menuAvatar} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Trang cá nhân</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Đổi mật khẩu</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Đăng xuất</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
