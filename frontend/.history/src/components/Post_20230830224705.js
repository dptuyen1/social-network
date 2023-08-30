import { faEllipsis, faMessage, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = () => {
    return (
        <>
            <div className="shadow-sm px-4 py-3 mb-5 bg-white rounded">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3">
                        <img
                            className="img-md rounded-circle border border-secondary-subtle p-2"
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
                    <p>20</p>
                    <p>5 bình luận</p>
                </div>

                <div className="">
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
            </div>
        </>
    );
};

export default Post;
