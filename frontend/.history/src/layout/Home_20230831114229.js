import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Post from '~/components/Post';
import { loadPosts } from '~/services/postService';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = loadPosts();
    }, []);

    return (
        <div className="bg-light">
            <Container>
                <Post />
            </Container>
        </div>
    );
};

export default Home;
