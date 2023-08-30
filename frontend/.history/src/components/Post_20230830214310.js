import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
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

                    <div className="dropdown">
                        <button
                            className="btn btn-light rounded-circle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <FontAwesomeIcon icon={faEllipsis} />
                        </button>
                        <ul className="shadow dropdown-menu">
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
            </div>

            <div class="btn-group dropup">
                <button
                    type="button"
                    class="btn btn-primary dropdown-toggle"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dropup
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
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Separated link
                        </a>
                    </li>
                </ul>
            </div>

            <div class="btn-group dropup">
                <button type="button" class="btn btn-primary">
                    Split dropup
                </button>
                <button
                    type="button"
                    class="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="visually-hidden">Toggle Dropdown</span>
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
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Separated link
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Post;
