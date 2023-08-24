const Comment = (props) => {
    const user = props.user;
    const comment = props.comment;
    const imgStyle = props.imgStyle;

    return (
        <>
            <div className="d-flex gap-2">
                <img src={user.avatar} alt="" style={imgStyle} />
            </div>
        </>
    );
};

export default Comment;
