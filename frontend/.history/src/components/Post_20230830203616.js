const Post = () => {
    return (
        <>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <div className="d-flex gap-3">
                    <img className="rounded-circle" src="./public/logo192.png" alt="Logo" />

                    <div>
                        <h5>Test</h5>
                        <p>Time</p>
                    </div>
                </div>

                <div class="dropdown">
                    <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Post;
