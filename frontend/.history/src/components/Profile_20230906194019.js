import { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);

    return (
        <>
            <Container>{user.cover !== null && <Image src={user.cover} thumbnail className="mt-3" />}</Container>
        </>
    );
};

export default Profile;
