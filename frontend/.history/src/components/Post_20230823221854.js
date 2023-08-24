import moment from 'moment/moment';
import Reaction from './Reaction';

const Post = ({ imgStyle, post, user, reactions }) => {
    return (
        <>
            <div className="card shadow-sm p-2 m-auto my-4" style={{ width: '30rem' }} key={post.id}>
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
                        return <Reaction />;
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
        </>
    );
};

export default Post;
