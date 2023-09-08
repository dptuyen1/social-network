import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container>
                {user.cover !== null && (
                    <div style={{ height: '100px' }}>
                        <Image src={user.cover} rounded className="mt-3" />
                    </div>
                )}
            </Container>
        </>
    );
};

export default Profile;
