import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Post from '~/components/Post';
import Api, { endpoints } from '~/configs/Api';
import { list } from '~/services/postService';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        try {
            let res = await Api.get(endpoints['posts']);
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        }
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
