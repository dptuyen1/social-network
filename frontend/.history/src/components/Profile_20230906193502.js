import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container>
                <h1>test</h1>
                <Image src={user.cover} fluid />
            </Container>
        </>
    );
};

export default Profile;
