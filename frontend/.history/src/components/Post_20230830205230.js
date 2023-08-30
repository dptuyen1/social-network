const Post = () => {
    return (
        <>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <div className="d-flex gap-3">
                    <img className="img-md rounded-circle" src="/logo192.png" alt="Logo" />

                    <div>
                        <h5>Test</h5>
                        <p>Time</p>
                    </div>
                </div>

                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item">Action</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Post;
