import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container></Container>
        </>
    );
};

export default Profile;
