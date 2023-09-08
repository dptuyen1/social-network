import {
    faEllipsis,
    faLock,
    faLockOpen,
    faMessage,
    faPaperPlane,
    faPenToSquare,
    faThumbsUp,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useContext, useEffect, useState } from 'react';
import * as commentService from '~/services/commentService';
import moment from 'moment';
import 'moment/locale/vi';
import { Button, Form } from 'react-bootstrap';
import { authApi, endpoints } from '~/configs/Api';
import { UserContext } from '~/App';

const Post = ({ props }) => {
    const reactions = props.reactions;
    const status = props.status;
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');
    const [user] = useContext(UserContext);

    useEffect(() => {
        const loadComments = async () => {
            let res = await commentService.load(props.id);
            setComments(res);
        };

        loadComments();
    }, [props.id]);

    const addComment = (e) => {
        e.preventDefault();

        const process = async () => {
            try {
                let res = await authApi().post(endpoints['add-comment'], {
                    content: content,
                    postId: props.id,
                });

                setComments([...comments, res.data]);
                setContent('');
            } catch (error) {
                console.log(error);
            }
        };

        process();
    };

    const changeStatus = () => {
        const process = async () => {
            try {
                let res = await authApi().post(endpoints['change-status'], {
                    postId: props.id,
                });
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="shadow-sm px-4 py-3 my-3 bg-white rounded w-50">
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-3">
                        <img
                            className="p-1 img-50 rounded-circle border border-dark border-opacity-10"
                            src={props.user.avatar}
                            alt="user-avatar"
                        />

                        <div>
                            <h6>
                                {props.user.lastName} {props.user.firstName}
                            </h6>
                            <p className="mb-0">{moment.utc(props.createdDate).fromNow()}</p>
                        </div>
                    </div>

                    {user.id === props.user.id && (
                        <div className="dropdown dropdown-menu-end">
                            <button
                                className="btn btn-light rounded-circle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <FontAwesomeIcon icon={faEllipsis} />
                            </button>
                            <ul className="shadow dropdown-menu border border-0">
                                <li>
                                    <button className="dropdown-item" type="button">
                                        <div className="d-flex gap-2 align-items-center">
                                            <FontAwesomeIcon icon={faLock} />
                                            Chỉnh sửa bài viết
                                        </div>
                                    </button>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                    <button className="dropdown-item" type="button" onClick={changeStatus}>
                                        <div className="d-flex gap-2 align-items-center">
                                            {status.toString() === 'true' ? (
                                                <>
                                                    <FontAwesomeIcon icon={faLock} />
                                                    Khóa bình luận
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon icon={faLockOpen} />
                                                    Mở khóa bình luận
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li>
                                    <button className="dropdown-item" type="button">
                                        <div className="d-flex gap-2 align-items-center">
                                            <FontAwesomeIcon icon={faTrash} />
                                            Xóa bài viết
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <p className="my-3">{props.content}</p>
                <div className="d-flex justify-content-between">
                    {props.totalReaction > 0 && <p>{props.totalReaction} lượt thích</p>}
                    {props.totalComment > 0 && <p>{props.totalComment} bình luận</p>}
                </div>
                <div className="post__function">
                    <hr />
                    <div className="row gap-2 py-2">
                        <Tippy
                            interactive
                            placement="top-start"
                            render={(attrs) => (
                                <div
                                    className="reaction-wrapper bg-white px-2 py-1 rounded border"
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    {reactions.map((reaction) => (
                                        <button key={reaction.id} className="btn reaction-icon border-0">
                                            <img
                                                className="p-1 img-30 rounded-circle border border-dark border-opacity-10 icon-img"
                                                src={reaction.icon}
                                                alt="Logo"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        >
                            <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <p className="mb-0">Thích</p>
                            </div>
                        </Tippy>

                        <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3">
                            <FontAwesomeIcon icon={faMessage} />
                            <p className="mb-0">Bình luận</p>
                        </div>
                    </div>
                    <hr />
                </div>
                {comments.map((comment) => (
                    <div key={comment.id} className="comments my-2">
                        <div className="d-flex gap-2 mb-2">
                            <img
                                className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                                src={comment.userId.avatar}
                                alt="Logo"
                            />

                            <div className="py-2 px-3 bg-light">
                                <h6>
                                    {comment.userId.lastName} {comment.userId.firstName}
                                </h6>
                                <p className="mb-0">{comment.content}</p>
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
                                <ul className="shadow dropdown-menu border border-0">
                                    <div className="arrow"></div>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            <div className="d-flex gap-2 align-items-center">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                Chỉnh sửa
                                            </div>
                                        </button>
                                    </li>
                                    <div className="dropdown-divider"></div>
                                    <li>
                                        <button className="dropdown-item" type="button">
                                            <div className="d-flex gap-2 align-items-center">
                                                <FontAwesomeIcon icon={faTrash} />
                                                Xóa
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}

                {status.toString() === 'false' ? (
                    <p className="text-center mt-3">Tác giả đã khóa bình luận...</p>
                ) : (
                    <Form className="d-flex mt-3 align-items-center gap-2" onSubmit={addComment}>
                        <img
                            className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                            src={props.user.avatar}
                            alt="Logo"
                        />

                        <Form.Group className="w-100">
                            <Form.Control
                                className="bg-light"
                                type="text"
                                placeholder="Hãy viết gì đó..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!content}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </Form>
                )}
            </div>
        </div>
    );
};

export default Post;
