import { useContext, useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';
import * as postService from '~/services/postService';
import * as reactionService from '~/services/reactionService';
import Post from './Post';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { faEllipsis, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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
                                            src={post.user.avatar}
                                            alt="user-avatar"
                                        />

                                        <div>
                                            <h6>
                                                {post.user.lastName} {post.user.firstName}
                                            </h6>
                                            {post.updatedDate === null ? (
                                                <p className="mb-0">{moment.utc(post.createdDate).fromNow()}</p>
                                            ) : (
                                                <p className="mb-0">
                                                    <span className="me-2">
                                                        {moment.utc(post.updatedDate).fromNow()}
                                                    </span>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {user.id === post.user.id && (
                                        <div className="dropdown dropdown-menu-end">
                                            <button
                                                className="btn btn-light rounded-circle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <FontAwesomeIcon icon={faEllipsis} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <p className="my-3">{post.content}</p>
                                <div className="d-flex justify-content-between">
                                    {post.totalReaction > 0 && <p>{post.totalReaction} lượt thích</p>}
                                    {post.totalComment > 0 && <p>{post.totalComment} bình luận</p>}
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
