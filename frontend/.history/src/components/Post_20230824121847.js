import moment from 'moment/moment';
import Reaction from './Reaction';
import Comment from './Comment';

const Post = (props) => {
    const imgStyle = props.imgStyle;
    const post = props.post;
    const reactions = props.reactions;
    const user = props.user;

    return (
        <>
            <div className="card shadow-sm p-2 m-auto my-4" style={{ width: '30rem' }} key={post.id}>
                <div className="post-header d-flex gap-3">
                    <img className="rounded-circle" src="" alt="" style={imgStyle}></img>

                    <div className="post-inform">
                        <h6>
                            {post.userId.firstName} {post.userId.lastName}
                        </h6>
                        <p>{moment.utc(post.createdDate).local().startOf('seconds').fromNow()}</p>
                    </div>
                </div>

                <div className="post-content p-3">{post.content}</div>

                <div className="post-reaction d-flex gap-2 my-2">
                    {reactions.map((reaction) => {
                        return <Reaction imgStyle={imgStyle} reaction={reaction} key={reaction.id} />;
                    })}
                </div>

                <Comment user={user} imgStyle={imgStyle} />
            </div>
        </>
    );
};

export default Post;
