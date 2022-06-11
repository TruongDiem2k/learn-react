import React from 'react';
import { useState, useEffect } from 'react';

function LearnUseEffect() {
    const [show, setShow] = useState(false);
    const handleToggle = () => {
        setShow(!show);
    };

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts));
    }, []);
    return (
        <div style={{ margin: '50px' }}>
            <button onClick={handleToggle}>Toggle</button>
            {show && <input type="text" />}
            {show && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LearnUseEffect;
