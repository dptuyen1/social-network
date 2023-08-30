import { Container, Row } from 'react-bootstrap';
import Post from '~/components/Post';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Post />
                </Row>
            </Container>
        </>
    );
};

export default Home;
