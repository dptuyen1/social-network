const Login = () => {
    return (
        <>
            <div className="card shadow-sm p-2 m-auto" style={{ width: '30rem' }}>
                <h5 className="text-center">Đăng nhập hệ thống</h5>
                <form>
                    <div className="mb-3">
                        <input
                            type="email"
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
        </>
    );
};

export default Login;
