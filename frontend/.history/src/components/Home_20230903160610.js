import { createContext, useContext, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { UserContext } from '~/App';
import Post from '~/components/Post';
import * as postService from '~/services/postService';
import * as reactionService from '~/services/reactionService';

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
        <div className="bg-light">
            <Container>
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
                        }}
                    />
                ))}
            </Container>
        </div>
    );
};

export default Home;
