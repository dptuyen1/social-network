const Register = () => {
    return ( <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Đăng ký người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Họ..." />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Tên..." />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập email..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mã số sinh viên</Form.Label>
                        <Form.Control type="text" placeholder="Nhập mã số sinh viên..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tài khoản</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tài khoản..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Xác nhận mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Xác nhận mật khẩu..." />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Đăng ký
                </Button>
            </Modal.Footer>
        </Modal> );
}
 
export default Register<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Đăng ký người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Họ..." />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Tên..." />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Nhập email..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mã số sinh viên</Form.Label>
                        <Form.Control type="text" placeholder="Nhập mã số sinh viên..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tài khoản</Form.Label>
                        <Form.Control type="text" placeholder="Nhập tài khoản..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Nhập mật khẩu..." />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Xác nhận mật khẩu</Form.Label>
                        <Form.Control type="password" placeholder="Xác nhận mật khẩu..." />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Đăng ký
                </Button>
            </Modal.Footer>
        </Modal>;