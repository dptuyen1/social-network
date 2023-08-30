import { faEllipsis, faLock, faMessage, faPenToSquare, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

const Post = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
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
                        <ul className="shadow dropdown-menu border border-0">
                            <div className="arrow"></div>
                            <li>
                                <button className="dropdown-item" type="button">
                                    <div className="d-flex gap-2 align-items-center">
                                        <FontAwesomeIcon icon={faLock} />
                                        Khóa bình luận
                                    </div>
                                </button>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li>
                                <button className="dropdown-item" type="button">
                                    <div className="d-flex gap-2 align-items-center">
                                        <FontAwesomeIcon icon={faTrash} />
                                        Xóa bài viết
                                    </div>
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

                <div className="post__function">
                    <hr />
                    <div className="row gap-2 py-2">
                        <Tippy
                            interactive
                            render={(attrs) => (
                                <div className="reaction-icons bg-white p-2" tabIndex="-1" {...attrs}>
                                    <button className="btn">
                                        <img
                                            className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                                            src="/logo192.png"
                                            alt="Logo"
                                        />
                                    </button>

                                    <button className="btn">
                                        <img
                                            className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                                            src="/logo192.png"
                                            alt="Logo"
                                        />
                                    </button>

                                    <button className="btn">
                                        <img
                                            className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                                            src="/logo192.png"
                                            alt="Logo"
                                        />
                                    </button>
                                </div>
                            )}
                        >
                            <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <p className="mb-0">Thích</p>
                            </div>
                        </Tippy>

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

                        <div className="pt-2 px-3 bg-light">
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
                            <ul className="shadow dropdown-menu border border-0">
                                <div className="arrow"></div>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        <div className="d-flex gap-2 align-items-center">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                            Chỉnh sửa
                                        </div>
                                    </button>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        <div className="d-flex gap-2 align-items-center">
                                            <FontAwesomeIcon icon={faTrash} />
                                            Xóa
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
