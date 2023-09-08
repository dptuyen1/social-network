import { useContext, useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { UserContext } from '~/App';
import * as postService from '~/services/postService';
import * as reactionService from '~/services/reactionService';
import Post from './Post';

const Profile = () => {
    const [user] = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [reactions, setReactions] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            let res = await postService.loadByUser(user.id);

            setPosts(res);
        };

        const loadReactions = async () => {
            let res = await reactionService.load();
            setReactions(res);
        };

        loadPosts();
        loadReactions();
    }, []);

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

                    {posts.map((post) => (
                        
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Profile;
