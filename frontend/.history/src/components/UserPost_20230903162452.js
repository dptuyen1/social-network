import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '~/App';
import { authApi, endpoints } from '~/configs/Api';

const UserPost = () => {
    const [content, setContent] = useState('');
    const [user] = useContext(UserContext);

    const addPost = (e) => {
        e.preventDefault();

        const process = async () => {
            try {
                await authApi().post(endpoints['add-post'], {
                    content: content,
                });
            } catch (err) {
                console.log(err);
            }
        };

        process();
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="shadow-sm px-4 py-3 my-3 bg-white rounded w-50">
                <Form className="d-flex align-items-center gap-2" onSubmit={(e) => addPost}>
                    <img
                        className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                        src={user.avatar}
                        alt="Logo"
                    />

                    <Form.Group className="w-100">
                        <Form.Control
                            className="bg-light"
                            type="text"
                            placeholder={user.firstName + ' ơi, bạn đang nghĩ gì thế...'}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={!content}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UserPost;
