import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/postsSlice';
import './PostForm.css';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ title, body }));
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <h2>Add New Post</h2>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="form-textarea"
                ></textarea>
            </div>
            <button type="submit" className="submit-button">Add Post</button>
        </form>

    );
};

export default PostForm;
