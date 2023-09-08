import { createContext, useContext, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { UserContext } from '~/App';
import Post from '~/components/Post';
import * as postService from '~/services/postService';
import * as reactionService from '~/services/reactionService';
import UserPost from './UserPost';

export const PostContext = createContext();

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [reactions, setReactions] = useState([]);
    const [user] = useContext(UserContext);

    useEffect(() => {
        const loadPosts = async () => {
            let res = await postService.load();
            setPosts(res);
        };

        const loadReactions = async () => {
            let res = await reactionService.load();
            setReactions(res);
        };

        loadPosts();
        loadReactions();
    }, []);

    if (posts === null) {
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }

    if (user === null) return <Navigate to="/login" />;

    return (
        <PostContext.Provider value={[posts, setPosts]}>
            <div className="bg-light">
                <Container>
                    <UserPost />

                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            props={{
                                id: post.id,
                                content: post.content,
                                createdDate: post.createdDate,
                                updatedDate: post.updatedDate,
                                status: post.status,
                                user: post.userId,
                                totalReaction: post.totalReaction,
                                totalComment: post.totalComment,
                                reactions: reactions,
                                deletePost: deletePost,
                            }}
                        />
                    ))}
                </Container>
            </div>
        </PostContext.Provider>
    );
};

export default Home;
