const Login = () => {
    return (
        <>
            <div className="card shadow-sm p-2 m-auto" style={{ width: '30rem' }}>
                <form>
                    <div class="mb-3">
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Nhập tài khoản..."
                        />
                    </div>

                    <div class="mb-3">
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Nhập mật khẩu..."
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
