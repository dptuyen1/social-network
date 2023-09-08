import {
    faEllipsis,
    faFloppyDisk,
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
import { useContext, useEffect, useRef, useState } from 'react';
import * as commentService from '~/services/commentService';
import * as detailsService from '~/services/detailsService';
import moment from 'moment';
import 'moment/locale/vi';
import { Button, Form, Modal, Spinner } from 'react-bootstrap';
import { authApi, endpoints } from '~/configs/Api';
import { UserContext } from '~/App';
import { PostContext } from './Home';

const Post = ({ props }) => {
    const reactions = props.reactions;
    const [status, setStatus] = useState(props.status);
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');
    const [user] = useContext(UserContext);
    const [, setPosts] = useContext(PostContext);
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState('');
    const [id, setId] = useState('');
    const [postContent, setPostContent] = useState('');
    const [details, setDetails] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);

    useEffect(() => {
        const loadComments = async () => {
            let res = await commentService.load(props.id);
            setComments(res);
        };

        const loadDetails = async () => {
            let res = await detailsService.load(user.id, props.id);

            console.log(res);

            setDetails(res);
        };

        loadComments();
        loadDetails();
    }, [user.id, props.id]);

    const addComment = (e) => {
        e.preventDefault();

        const process = async () => {
            try {
                let res = await authApi().post(endpoints['add-comment'], {
                    content: content,
                    postId: props.id,
                });

                setComments((prev) => [...prev, res.data]);
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
                let res = await authApi().put(endpoints['lock-unlock'](props.id), {
                    status: status,
                });

                setStatus(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        process();
    };

    const deletePost = () => {
        const process = async () => {
            try {
                await authApi().delete(endpoints['delete-post'](props.id));

                setPosts((prevPosts) => prevPosts.filter((post) => post.id !== props.id));
            } catch (error) {
                console.log(error);
            }
        };

        process();
    };

    const addReaction = (reactionId) => {
        const process = async () => {
            try {
                await authApi().post(endpoints['add-reaction'], {
                    postId: props.id,
                    reactionId: reactionId,
                });
            } catch (error) {
                console.log(error);
            }
        };

        process();
    };

    const deleteComment = (commentId) => {
        const process = async () => {
            try {
                await authApi().delete(endpoints['delete-comment'](commentId));

                setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
            } catch (error) {
                console.log(error);
            }
        };

        process();
    };

    const focusInput = () => {
        ref.current.focus();
    };

    const getEdit = (commentId) => {
        const process = async () => {
            let res = await authApi().get(endpoints['get-comment'](commentId));

            setEdit(res.data.content);

            setShow(!show);

            setId(commentId);
        };

        process();
    };

    const editComment = (e, id) => {
        e.preventDefault();

        const process = async () => {
            try {
                let res = await authApi().put(endpoints['edit-comment'](id), {
                    content: edit,
                });

                setComments((prevComments) => {
                    const updatedComments = [...prevComments];
                    const commentIndex = updatedComments.findIndex((comment) => comment.id === id);

                    console.log(commentIndex);

                    if (commentIndex !== -1) {
                        updatedComments[commentIndex].content = res.data.content;
                    }

                    return updatedComments;
                });

                setEdit('');
                setShow(!show);
            } catch (err) {
                console.log(err);
            }
        };

        process();
    };

    const getContent = (postId) => {
        const process = async () => {
            let res = await authApi().get(endpoints['get-post'](postId));

            setPostContent(res.data.content);

            setShowModal(!showModal);
        };

        process();
    };

    const editPost = (e) => {
        e.preventDefault();

        const process = async () => {
            try {
                let res = await authApi().put(endpoints['edit-post'](props.id), {
                    content: postContent,
                });

                setPosts((prevPosts) => {
                    const updatedPosts = [...prevPosts];
                    const postIndex = updatedPosts.findIndex((post) => post.id === props.id);

                    console.log(postIndex);

                    if (postIndex !== -1) {
                        updatedPosts[postIndex].content = res.data.content;
                    }

                    return updatedPosts;
                });

                setPostContent('');
                setShowModal(!showModal);
            } catch (err) {
                console.log(err);
            }
        };

        process();
    };

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
                            {props.updatedDate === null ? (
                                <p className="mb-0">{moment.utc(props.createdDate).fromNow()}</p>
                            ) : (
                                <p className="mb-0">
                                    <span className="me-2">{moment.utc(props.updatedDate).fromNow()}</span>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </p>
                            )}
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
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        onClick={() => getContent(props.id)}
                                    >
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
                                    <button className="dropdown-item" type="button" onClick={deletePost}>
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
                                        <button
                                            key={reaction.id}
                                            className="btn reaction-icon border-0"
                                            onClick={() => addReaction(reaction.id)}
                                        >
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
                            {details ? (
                                <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3 text-primary">
                                    {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
                                    <img className="img-30" src={details.reactionId.icon} alt="reaction-icon"></img>
                                    <p className="mb-0" style={{ fontWeight: 'bold' }}>
                                        {details.reactionId.name}
                                    </p>
                                </div>
                            ) : (
                                <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <p className="mb-0">Thích</p>
                                </div>
                            )}
                        </Tippy>

                        <div
                            className="btn btn-light col d-flex align-items-center justify-content-center gap-3"
                            onClick={focusInput}
                        >
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

                            <div>
                                <div className="py-2 px-3 bg-light">
                                    <h6>
                                        {comment.userId.lastName} {comment.userId.firstName}
                                    </h6>
                                    <p className="mb-0">{comment.content}</p>
                                </div>

                                {comment.updatedDate !== null && (
                                    <p className="mb-0 my-2">
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                        <span className="ms-2">{moment.utc(comment.updatedDate).fromNow()}</span>
                                    </p>
                                )}
                            </div>

                            {(user.id === comment.userId.id || user.id === props.user.id) && (
                                <div className="dropdown dropdown-menu-end">
                                    <button
                                        className="btn btn-light rounded-circle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </button>

                                    {user.id === comment.userId.id ? (
                                        <ul className="shadow dropdown-menu border border-0">
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    type="button"
                                                    onClick={() => getEdit(comment.id)}
                                                >
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                        Chỉnh sửa
                                                    </div>
                                                </button>
                                            </li>
                                            <div className="dropdown-divider"></div>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    type="button"
                                                    onClick={() => deleteComment(comment.id)}
                                                >
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                        Xóa
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    ) : (
                                        <ul className="shadow dropdown-menu border border-0">
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    type="button"
                                                    onClick={() => deleteComment(comment.id)}
                                                >
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                        Xóa
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {show.toString() === 'true' && (
                    <Form className="d-flex mt-3 align-items-center gap-2" onSubmit={(e) => editComment(e, id)}>
                        <img
                            className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                            src={user.avatar}
                            alt="Logo"
                        />

                        <Form.Group className="w-100">
                            <Form.Control
                                className="bg-light"
                                type="text"
                                placeholder="Hãy viết gì đó..."
                                value={edit}
                                onChange={(e) => setEdit(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!edit}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </Form>
                )}

                {status.toString() === 'false' ? (
                    <p className="text-center mt-3">Tác giả đã khóa bình luận...</p>
                ) : (
                    <Form className="d-flex mt-3 align-items-center gap-2" onSubmit={addComment}>
                        <img
                            className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                            src={user.avatar}
                            alt="Logo"
                        />

                        <Form.Group className="w-100">
                            <Form.Control
                                className="bg-light"
                                type="text"
                                placeholder="Hãy viết gì đó..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                ref={ref}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={!content}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </Form>
                )}

                <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h6>Chỉnh sửa bài viết</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                            </div>
                        </div>

                        <Form.Group className="my-3">
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={editPost}>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                            <span className="ms-2">Lưu</span>
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Post;
