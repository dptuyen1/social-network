import { useEffect, useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState(null);

    const loadPosts = async () => {
        let response = await fetch('http://localhost:8080/api/posts');
        let data = await response.json();

        setPosts(data);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <>
            <div className="container">{}</div>
        </>
    );
};

export default Home;
