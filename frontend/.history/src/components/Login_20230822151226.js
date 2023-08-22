const Login = () => {
    return (
        <>
            <div class="d-flex justify-content-center align-item-center" style={{ height: '500px' }}>
                <div className="shadow p-3 mb-5 bg-body rounded m-auto" style={{ width: '30rem' }}>
                    <h5 className="text-center py-3">Đăng nhập hệ thống</h5>
                    <form>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Nhập tài khoản..."
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Nhập mật khẩu..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Đăng nhập
                        </button>
                    </form>
                    <hr />
                    <div className="text-center pb-2">
                        <button type="submit" className="btn btn-success w-50">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
