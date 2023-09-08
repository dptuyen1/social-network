import { faEllipsis, faLock, faMessage, faPenToSquare, faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

const Post = ({ props }) => {
    const reactions = props.reactions;
    const comments = props.comments;

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
                            <p>{props.createdDate}</p>
                        </div>
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
                            <li>
                                <button className="dropdown-item" type="button">
                                    <div className="d-flex gap-2 align-items-center">
                                        <FontAwesomeIcon icon={faLock} />
                                        Khóa bình luận
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
                </div>

                <p className="my-3">{props.content}</p>

                <div className="d-flex justify-content-between">
                    <p>{props.totalReaction} lượt thích</p>
                    <p>{props.totalComment} bình luận</p>
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
                                        <button className="btn reaction-icon border-0">
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
                    <div className="comments my-2">
                        <div className="d-flex gap-2 mb-2">
                            <img
                                className="p-1 img-40 rounded-circle border border-dark border-opacity-10"
                                src={comment.userId.avatar}
                                alt="Logo"
                            />

                            <div className="pt-2 px-3 bg-light">
                                <h6>
                                    {comment.userId.lastName} {comment.userId.firstName}
                                </h6>
                                <p>{comment.content}</p>
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
            </div>
        </div>
    );
};

export default Post;
