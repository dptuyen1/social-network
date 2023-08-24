const Comment = (props) => {
    const user = props.user;
    const imgStyle = props.imgStyle;

    return (
        <>
            <div className="post-comment d-flex align-items-center gap-2">
                <img src={user.avatar} alt="" style={imgStyle} className="rounded-circle"></img>

                <input type="text" className="form-control"></input>
                <button type="submit" className="btn btn-primary h-auto">
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </>
    );
};

export default Comment;
