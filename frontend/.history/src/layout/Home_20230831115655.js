import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Post from '~/components/Post';
import { loadPosts } from '~/services/postService';

const Home = () => {
    const [posts, setPosts] = useState([]);

    loadPosts = async () => {
        try {
            let res = await Api.get(endpoints['posts']);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const data = loadPosts();
        setPosts(data);
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
                    <Post key={post.id} props={post} />
                ))}
            </Container>
        </div>
    );
};

export default Home;
