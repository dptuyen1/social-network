import { useEffect, useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState(null);

    useEffect();

    return (
        <>
            <div className="container">
                <div className="card mt-4 shadow-sm p-2" style={{ width: '30rem' }}>
                    <div className="post-header d-flex">
                        <img className="rounded-circle me-3" src="" alt=""></img>

                        <div className="">
                            <h6>Tuyen Dang</h6>
                            <p>10h truoc</p>
                        </div>
                    </div>

                    <div className="post-content p-3">Test</div>

                    <div className="post-reaction"></div>

                    <div class="post-comment d-flex">
                        <img src="" alt=""></img>

                        <input type="text" className="form-control my-2"></input>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
