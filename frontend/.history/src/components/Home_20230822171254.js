import { useContext, useEffect, useState } from 'react';
import Apis, { endpoints } from '../configs/Apis';
import moment from 'moment/moment';
import { MyUserContext } from '../App';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [reactions, setReactions] = useState(null);
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
                        <div className="post-header d-flex align-items-center gap-2">
                            <img className="rounded-circle" src={user.avatar} alt="" style={imgStyle}></img>

                            <div className="post-comment d-flex align-items-center w-100 gap-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={user.firstName + ' ơi, bạn đang nghĩ gì thế?'}
                                ></input>
                                <button type="submit" className="btn btn-primary h-auto">
                                    <i className="fa-solid fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {posts.map((post) => {
                        return (
                            <div className="card shadow-sm p-2 m-auto my-5" style={{ width: '30rem' }} key={post.id}>
                                <div className="post-header d-flex gap-3">
                                    <img className="rounded-circle" src="" alt="" style={imgStyle}></img>

                                    <div className="post-inform">
                                        <h6>Test</h6>
                                        <p>{moment.utc(post.createdDate).local().startOf('seconds').fromNow()}</p>
                                    </div>
                                </div>

                                <div className="post-content p-3">{post.content}</div>

                                <div className="post-reaction d-flex gap-2">
                                    {reactions.map((reaction) => {
                                        return (
                                            <button type="submit" key={reaction.id} className="btn btn-light mb-2">
                                                <img
                                                    src={reaction.icon}
                                                    alt=""
                                                    className="rounded-circle"
                                                    style={imgStyle}
                                                ></img>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="post-comment d-flex align-items-center gap-2">
                                    <img src={user.avatar} alt="" style={imgStyle} className="rounded-circle"></img>

                                    <input type="text" className="form-control"></input>
                                    <button type="submit" className="btn btn-primary h-auto">
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
};

export default Home;
