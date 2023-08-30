import { faEllipsis, faMessage, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = () => {
    return (
        <>
            <div className="shadow-sm px-4 py-3 my-3 bg-white rounded w-50">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3">
                        <img
                            className="p-1 img-50 rounded-circle border border-dark border-opacity-10"
                            src="/logo192.png"
                            alt="Logo"
                        />

                        <div>
                            <h5>Test</h5>
                            <p>Time</p>
                        </div>
                    </div>

                    <div className="dropdown dropdown-menu-end">
                        <button
                            className="btn btn-light rounded-circle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                        <ul className="shadow dropdown-menu">
                            <div className="arrow"></div>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Khóa bình luận
                                </button>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <button className="dropdown-item" type="button">
                                    Xóa bài viết
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="my-3">Nội dung bài đăng</p>

                <div className="d-flex justify-content-between">
                    <p>20 lượt thích</p>
                    <p>5 bình luận</p>
                </div>

                <div>
                    <hr />
                    <div className="row gap-2 py-2">
                        <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p className="mb-0">Thích</p>
                        </div>

                        <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3">
                            <FontAwesomeIcon icon={faMessage} />
                            <p className="mb-0">Bình luận</p>
                        </div>
                    </div>
                    <hr />
                </div>

                <div className="comments my-2">
                    <div className="d-flex gap-2 mb-2">
                        <img
                            className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                            src="/logo192.png"
                            alt="Logo"
                        />

                        <div className="pt-2 px-3 bg-light rounded">
                            <h6>Người dùng</h6>
                            <p>Bình luận...</p>
                        </div>

                        <div className="dropdown dropdown-menu-end">
                            <button
                                className="btn btn-light rounded-circle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FontAwesomeIcon icon={faEllipsis} />
                            </button>
                            <ul className="shadow dropdown-menu">
                                <div className="arrow"></div>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        Chỉnh sửa
                                    </button>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        Xóa
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
