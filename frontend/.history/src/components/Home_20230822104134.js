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

    const imgStyle = {
        width: '20px',
        height: '20px',
    };

    if (posts !== null && setPosts !== null)
        return (
            <>
                <div className="container">
                    <div className="card shadow-sm p-2 m-auto" style={{ width: '30rem' }}>
                        <div className="post-header d-flex align-items-center">
                            <img
                                className="rounded-circle"
                                src="https://res.cloudinary.com/dzbcst18v/image/upload/v1692626232/haha_xyukib.png"
                                alt=""
                                style={imgStyle}
                            ></img>

                            <div className="post-comment d-flex align-items-center w-100">
                                <input
                                    type="text"
                                    className="form-control mx-3"
                                    placeholder="Tuyền ơi, bạn đang nghĩ gì thế?"
                                ></input>
                                <button type="submit" className="btn btn-primary h-auto">
                                    <i class="fa-solid fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    {posts.map((post) => {
                        return (
                            <div className="card shadow-sm p-2 m-auto my-2" style={{ width: '30rem' }} key={post.id}>
                                <div className="post-header d-flex">
                                    <img
                                        className="rounded-circle"
                                        src="https://res.cloudinary.com/dzbcst18v/image/upload/v1692626232/haha_xyukib.png"
                                        alt=""
                                        style={imgStyle}
                                    ></img>

                                    <div>
                                        <h6>Tuyen Dang</h6>
                                        <p>{moment.utc(post.createdDate).local().startOf('seconds').fromNow()}</p>
                                    </div>
                                </div>

                                <div className="post-content p-3">{post.content}</div>

                                <div className="post-reaction d-flex">
                                    {reactions.map((reaction) => {
                                        return (
                                            <button type="submit" key={reaction.id} className="btn btn-light me-2 mb-2">
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

                                <div className="post-comment d-flex align-items-center">
                                    <img
                                        src="https://res.cloudinary.com/dzbcst18v/image/upload/v1692626232/haha_xyukib.png"
                                        alt=""
                                        style={imgStyle}
                                    ></img>

                                    <input type="text" className="form-control mx-3"></input>
                                    <button type="submit" className="btn btn-primary h-auto">
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
