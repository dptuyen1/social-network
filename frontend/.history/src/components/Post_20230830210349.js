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

                    <div className="dropdown mr-1">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <li className="dropdown-item">
                                <button className="btn">Khóa bình luận</button>
                            </li>
                            <div className="dropdown-divider"></div>
                            <li className="dropdown-item">
                                <button className="btn">Xóa bài viết</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
