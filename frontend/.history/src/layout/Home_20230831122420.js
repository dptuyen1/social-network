import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Post from '~/components/Post';
import Api, { endpoints } from '~/configs/Api';
import { loadPosts } from '~/services/postService';

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
                    <Post key={post.id} content={post.content} p={{ content: post.content }} />
                ))}
                ;
            </Container>
        </div>
    );
};

export default Home;
