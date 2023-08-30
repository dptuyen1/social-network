import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = () => {
    return (
        <>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3">
                        <img className="img-md rounded-circle" src="/logo192.png" alt="Logo" />

                        <div>
                            <h5>Test</h5>
                            <p>Time</p>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button
                            class="btn btn-light rounded-circle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-offset="10,20"
                        >
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                        <ul class="shadow dropdown-menu">
                            <li>
                                <button class="dropdown-item" type="button">
                                    Khóa bình luận
                                </button>
                            </li>
                            <div class="dropdown-divider"></div>
                            <li>
                                <button class="dropdown-item" type="button">
                                    Xóa bài viết
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
