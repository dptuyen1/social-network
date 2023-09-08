import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container>
                {user.cover !== null && <Image src={user.cover} rounded className="mt-3 w-100" />} <p>testtttt</p>
            </Container>
        </>
    );
};

export default Profile;
