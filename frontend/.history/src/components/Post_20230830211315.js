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
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <button class="dropdown-item" type="button">
                                    Action
                                </button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">
                                    Another action
                                </button>
                            </li>
                            <li>
                                <button class="dropdown-item" type="button">
                                    Something else here
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
