const Avatar = (props) => {
    const user = props.user;
    const style = props.style;
    return (
        <>
            <img src={user.avatar} alt="" style={imgStyle} className="rounded-circle"></img>
        </>
    );
};

export default Avatar;
