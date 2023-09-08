import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <div className="my-3">
            <Container>{user.cover !== null && <Image src={user.cover} fluid rounded />}</Container>
        </div>
    );
};

export default Profile;
