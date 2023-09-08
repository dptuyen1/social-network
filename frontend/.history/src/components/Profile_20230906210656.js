import { useContext, useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';
import * as postService from '~/services/postService';
import * as reactionService from '~/services/reactionService';
import Post from './Post';

const Profile = () => {
    const [user] = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [reactions, setReactions] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            let res = await postService.loadByUser(user.id);

            setPosts(res);
        };

        const loadReactions = async () => {
            let res = await reactionService.load();
            setReactions(res);
        };

        loadPosts();
        loadReactions();
    }, []);

    return (
        <>
            <Container>
                {user.cover !== null && (
                    <div>
                        <Image src={user.cover} fluid rounded className="mt-3" />
                    </div>
                )}

                <div className="my-3 card shadow p-3">
                    <div className="d-flex gap-3">
                        <Image src={user.avatar} roundedCircle className="img-200" />
                        <h4>
                            {user.lastName} {user.firstName}
                        </h4>
                    </div>
                </div>

                <div className="my-3 card shadow p-3">
                    <h5>Bài viết</h5>

                    {posts.map((post) => (
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
                                                    <span className="me-2">
                                                        {moment.utc(props.updatedDate).fromNow()}
                                                    </span>
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
                                                    <button
                                                        className="dropdown-item"
                                                        type="button"
                                                        onClick={changeStatus}
                                                    >
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
                                                    <button
                                                        className="dropdown-item"
                                                        type="button"
                                                        onClick={deletePost}
                                                    >
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
                                                            onClick={addReaction}
                                                            value={rct}
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
                                            <div className="btn btn-light col d-flex align-items-center justify-content-center gap-3">
                                                <FontAwesomeIcon icon={faThumbsUp} />
                                                <p className="mb-0">Thích</p>
                                            </div>
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
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Profile;
