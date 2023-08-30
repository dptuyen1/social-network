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
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
