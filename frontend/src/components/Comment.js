const Comment = (props) => {
    const user = props.user;
    const comment = props.comment;
    const imgStyle = props.imgStyle;

    return (
        <>
            <div className="d-flex gap-2 align-items-stretch">
                <img src={user.avatar} alt="" style={imgStyle} />

                <div>
                    <h6>
                        {user.firstName} {user.lastName}
                    </h6>
                    <p>{comment.content}</p>
                </div>
            </div>
        </>
    );
};

export default Comment;
