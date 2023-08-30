import { Dropdown } from 'react-bootstrap';

const Post = () => {
    return (
        <>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">
                <div className="d-flex gap-3">
                    <img className="rounded-circle" src="./public/logo192.png" alt="Logo" />

                    <div>
                        <h5>Test</h5>
                        <p>Time</p>
                    </div>
                </div>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    );
};

export default Post;
