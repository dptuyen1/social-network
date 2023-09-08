import { useContext, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';

const Profile = () => {
    const [user] = useContext(UserContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {}, []);

    return (
        <>
            <Container>
                {user.cover !== null && (
                    <div>
                        <Image src={user.cover} fluid rounded className="mt-3" />
                    </div>
                )}

                <div className="my-3 card shadow p-3">
                    <div className="d-flex gap-3">
                        <Image src={user.avatar} roundedCircle className="img-200" />
                        <h4>
                            {user.lastName} {user.firstName}
                        </h4>
                    </div>
                </div>

                <div className="my-3 card shadow p-3">
                    <h5>Bài viết</h5>
                </div>
            </Container>
        </>
    );
};

export default Profile;
