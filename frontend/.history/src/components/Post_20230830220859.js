import { faEllipsis, faMessage, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = () => {
    return (
        <>
            <div className="shadow-sm px-4 py-3 mb-5 bg-white rounded">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3">
                        <img className="img-md rounded-circle" src="/logo192.png" alt="Logo" />

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

                <div className="d-flex justify-content-between my-3">
                    <p>20</p>
                    <p>5 bình luận</p>
                </div>

                <div>
                    <hr />
                    <div className="row">
                        <div className="col d-flex align-items-center text-center">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p>Thích</p>
                        </div>

                        <div className="col d-flex align-items-center text-center">
                            <FontAwesomeIcon icon={faMessage} />
                            <p>Bình luận</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
};

export default Post;
