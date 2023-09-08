import { Container } from 'react-bootstrap';
import Post from '~/components/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    return (
        <div className="bg-light">
            <Container>
                <Post />
            </Container>
        </div>
    );
};

export default Home;
