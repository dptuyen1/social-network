import axios from 'axios';
import { useState } from 'react';
import Api, { endpoints } from '../configs/Api';

const Comment = (props) => {
    const user = props.user;
    const imgStyle = props.imgStyle;
    const placeholder = props.placeholder;

    const [content, setContent] = useState([]);

    const add = (e) => {
        e.preventDefault();

        const process = async () => {
            try {
                const response = await Api.post(endpoints['posts'], {
                    content: content,
                    userId: user.data,
                });

                console.log(response.data);
            } catch (ex) {
                console.error(ex);
            }
        };

        process();
    };

    return (
        <>
            <div className="post-comment d-flex align-items-center gap-2">
                <img src={user.avatar} alt="" style={imgStyle} className="rounded-circle"></img>

                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
                <button type="submit" className="btn btn-primary h-auto" onClick={add}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </>
    );
};

export default Comment;
