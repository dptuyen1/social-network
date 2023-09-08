import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container>
                {user.cover !== null && (
                    <div className="h-50">
                        <Image src={user.cover} fluid rounded className="mt-3" />
                    </div>
                )}
            </Container>
        </>
    );
};

export default Profile;
