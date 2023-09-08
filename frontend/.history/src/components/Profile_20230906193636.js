import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <div className="my-3">
            <Container>
                <Image src={user.cover} fluid />
            </Container>
        </div>
    );
};

export default Profile;
