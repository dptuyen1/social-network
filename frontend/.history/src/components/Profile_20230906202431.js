import { useContext } from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container>
                {user.cover !== null && (
                    <div>
                        <Image src={user.cover} rounded className="mt-3 w-100" height={'400px'} width={'100%'} />
                    </div>
                )}
            </Container>
        </>
    );
};

export default Profile;
