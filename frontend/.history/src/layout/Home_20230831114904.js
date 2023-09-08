import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Post from '~/components/Post';
import { loadPosts } from '~/services/postService';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const data = loadPosts();
        setPosts(data);
    }, []);

    return (
        <div className="bg-light">
            <Container>
                {posts.map((post) => (
                    <Post key={post.id} props={post} />
                ))}
            </Container>
        </div>
    );
};

export default Home;
