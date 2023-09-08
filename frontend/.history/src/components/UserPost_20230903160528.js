import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const UserPost = ({ props }) => {
    const [content, setContent] = useState('');

    return (
        <Form className="d-flex mt-3 align-items-center gap-2">
            <img
                className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                src={props.user.avatar}
                alt="Logo"
            />

            <Form.Group className="w-100">
                <Form.Control
                    className="bg-light"
                    type="text"
                    placeholder=" ơi, bạn đang nghĩ gì thế..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!content}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
        </Form>
    );
};

export default UserPost;
