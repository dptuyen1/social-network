import { useContext, useEffect, useState } from 'react';
import Apis, { endpoints } from '../configs/Api';
import { MyUserContext } from '../App';
import { Navigate } from 'react-router-dom';
import Post from './Post';
import Comment from './Comment';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [reactions, setReactions] = useState([]);
    const [user] = useContext(MyUserContext);

    const loadPosts = async () => {
        let response = await Apis.get(endpoints['posts']);

        setPosts(response.data);
    };

    const loadReactions = async () => {
        let response = await Apis.get(endpoints['reactions']);

        setReactions(response.data);
    };

    useEffect(() => {
        loadPosts();
        loadReactions();
    }, []);

    const imgStyle = {
        width: '30px',
    };

    if (user === null) return <Navigate to="/login" />;

    if (posts !== null && setPosts !== null)
        return (
            <>
                <div className="container">
                    <div className="card shadow-sm p-3 m-auto mt-2" style={{ width: '30rem' }}>
                        <Comment
                            user={user}
                            imgStyle={imgStyle}
                            placeholder={`${user.firstName} ơi, bạn đang nghĩ gì thế?`}
                        />
                    </div>
                    {posts.map((post) => {
                        return <Post imgStyle={imgStyle} post={post} user={user} reactions={reactions} />;
                    })}
                </div>
            </>
        );
};

export default Home;
