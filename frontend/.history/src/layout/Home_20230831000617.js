import { Container } from 'react-bootstrap';
import Post from '~/components/Post';

const Home = () => {
    return (
        <div className="bg-light">
            <Container>
                <Post />
            </Container>
        </div>
    );
};

export default Home;
