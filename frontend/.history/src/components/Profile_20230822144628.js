const Profile = () => {
    return (
        <>
            <div className="card shadow-sm p-2 m-auto my-2" style={{ width: '30rem' }} key={post.id}>
                <div className="post-header d-flex">
                    <img
                        className="rounded-circle me-4"
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
                                <img src={reaction.icon} alt="" className="rounded-circle" style={imgStyle}></img>
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
        </>
    );
};

export default Profile;
