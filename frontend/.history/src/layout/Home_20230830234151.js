import { Container } from 'react-bootstrap';
import Post from '~/components/Post';

const Home = () => {
    return (
        <>
            <Container>
                <div className="d-flex justify-content-center align-items-center">
                    <Post />
                </div>
            </Container>
        </>
    );
};

export default Home;
