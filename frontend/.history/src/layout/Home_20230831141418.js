import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Post from '~/components/Post';
import * as postService from '~/services/postService';
import * as reactionService from '~/services/reactionService';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [reactions, setReactions] = useState([]);

    const loadPosts = async () => {
        const res = await postService.loadPosts();
        setPosts(res);
    };

    const loadReactions = async () => {
        const res = await reactionService.loadReactions();
        setPosts(res);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    if (posts === null) {
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }

    return (
        <div className="bg-light">
            <Container>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        props={{
                            content: post.content,
                            createdDate: post.createdDate,
                            user: post.userId,
                            totalReaction: post.totalReaction,
                            totalComment: post.totalComment,
                        }}
                    />
                ))}
            </Container>
        </div>
    );
};

export default Home;
