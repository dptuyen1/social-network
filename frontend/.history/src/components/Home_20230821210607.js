import { useEffect, useState } from 'react';
import Apis, { endpoints } from '../configs/Apis';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [reactions, setReactions] = useState(null);

    const loadPosts = async () => {
        // let response = await fetch('http://localhost:8080/api/posts');
        // let data = await response.json();

        let response = await Apis.get(endpoints['posts']);

        setPosts(response.data);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    if (posts !== null)
        return (
            <>
                <div className="container">
                    {posts.map((post) => {
                        return (
                            <div className="card mt-4 shadow-sm p-2" style={{ width: '30rem' }} key={post.id}>
                                <div className="post-header d-flex">
                                    <img className="rounded-circle me-3" src="" alt=""></img>

                                    <div className="">
                                        <h6>Tuyen Dang</h6>
                                        <p>10h truoc</p>
                                    </div>
                                </div>

                                <div className="post-content p-3">{post.content}</div>

                                <div className="post-reaction"></div>

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
