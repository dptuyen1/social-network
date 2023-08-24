const Reaction = (props) => {
    const imgStyle = props.imgStyle;
    const reaction = props.reaction;

    return (
        <>
            <div className="post-reaction d-flex gap-2">
                <button type="submit" key={reaction.id} className="btn btn-light mb-2">
                    <img src={reaction.icon} alt="" className="rounded-circle" style={imgStyle}></img>
                </button>
            </div>
        </>
    );
};

export default Reaction;
