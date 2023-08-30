import { Container } from 'react-bootstrap';
import Post from '~/components/Post';

const Home = () => {
    return (
        <>
            <Container className="py-5">
                <Post />
            </Container>
        </>
    );
};

export default Home;
