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
                        <Image src={user.cover} rounded className="mt-3 w-100" />
                    </div>
                )}

                <div className="card d-flex">
                    <Image src={user.avatar} roundedCircle />
                </div>
            </Container>
        </>
    );
};

export default Profile;
