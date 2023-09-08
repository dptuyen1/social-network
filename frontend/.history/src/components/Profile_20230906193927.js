import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container>{user.cover !== null && <Image src={user.cover} fluid rounded />}</Container>
        </>
    );
};

export default Profile;
