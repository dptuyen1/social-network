import { useState } from 'react';

const Comment = (props) => {
    const user = props.user;
    const imgStyle = props.imgStyle;
    const placeholder = props.placeholder;

    const [posts, setPosts] = useState([]);

    return (
        <>
            <div className="post-comment d-flex align-items-center gap-2">
                <img src={user.avatar} alt="" style={imgStyle} className="rounded-circle"></img>

                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    value={(e) => {
                        setPosts(e.target.value);
                    }}
                ></input>
                <button type="submit" className="btn btn-primary h-auto" onClick={addPost()}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </>
    );
};

export default Comment;
