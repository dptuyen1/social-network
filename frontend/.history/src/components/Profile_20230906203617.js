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

                <div className="my-3 card shadow">
                    <div className="d-flex gap-3">
                        <Image src={user.avatar} roundedCircle className="img-70" />
                        <h4>
                            {user.lastName} {user.firstName}
                        </h4>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
