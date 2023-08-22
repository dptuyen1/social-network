const Login = () => {
    return (
        <>
            <div className="card shadow-sm p-2 m-auto" style={{ width: '30rem' }}>
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

                <button type="submit" className="btn btn-success w-50 me-auto">
                    Đăng ký
                </button>
            </div>
        </>
    );
};

export default Login;
