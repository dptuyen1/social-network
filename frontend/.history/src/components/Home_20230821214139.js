import { useEffect, useState } from 'react';
import Apis, { endpoints } from '../configs/Apis';
import moment from 'moment/moment';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [reactions, setReactions] = useState(null);

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

    if (posts !== null && setPosts !== null)
        return (
            <>
                <div className="container">
                    {posts.map((post) => {
                        return (
                            <div
                                className="card mt-4 shadow-sm p-2 text-center"
                                style={{ width: '30rem' }}
                                key={post.id}
                            >
                                <div className="post-header d-flex">
                                    <img className="rounded-circle me-3" src="" alt=""></img>

                                    <div>
                                        <h6>Tuyen Dang</h6>
                                        <p>{moment.utc(post.createdDate).local().startOf('seconds').fromNow()}</p>
                                    </div>
                                </div>

                                <div className="post-content p-3">{post.content}</div>

                                <div className="post-reaction d-flex">
                                    {reactions.map((reaction) => {
                                        return (
                                            <button type="submit" key={reaction.id} className="btn btn-light me-1">
                                                <img
                                                    src={reaction.icon}
                                                    alt=""
                                                    className="rounded-circle"
                                                    style={{ width: '20px' }}
                                                ></img>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="post-comment d-flex align-items-center">
                                    <img src="" alt=""></img>

                                    <input type="text" className="form-control my-2"></input>
                                    <button type="submit" className="btn btn-primary ms-1 h-auto">
                                        <i class="fa-solid fa-paper-plane"></i>
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
