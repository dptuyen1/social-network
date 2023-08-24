const Reaction = (props) => {
    return (
        <>
            <button type="submit" key={reaction.id} className="btn btn-light mb-2">
                <img src={reaction.icon} alt="" className="rounded-circle" style={imgStyle}></img>
            </button>
        </>
    );
};

export default Reaction;
