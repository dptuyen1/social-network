import { Container } from 'react-bootstrap';
import Post from '~/components/Post';

const Home = () => {
    return (
        <>
            <Container>
                <div className="d-flex justify-content-center align-items-center"></div>
                <Post />
            </Container>
        </>
    );
};

export default Home;
