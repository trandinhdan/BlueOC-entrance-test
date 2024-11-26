import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import './PostList.css';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.list);
    const status = useSelector((state) => state.posts.status);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading posts.</div>;
    }

    return (
        <div className="post-container">
            <h1 className="title">Posts</h1>
            <div className="post-grid">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-excerpt">{post.body.slice(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
