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

                    <div class="btn-group">
                        <button
                            class="btn btn-secondary btn-lg dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Large button
                        </button>
                        <ul class="dropdown-menu">...</ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-lg" type="button">
                            Large split button
                        </button>
                        <button
                            type="button"
                            class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">...</ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
