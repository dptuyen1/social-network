import { Container } from 'react-bootstrap';
import Post from '~/components/Post';

const Home = () => {
    return (
        <>
            <Container>
                <h1>Home Page</h1>
                <Post />
            </Container>
        </>
    );
};

export default Home;
