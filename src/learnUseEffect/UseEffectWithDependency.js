import React from 'react';
import { useState, useEffect } from 'react';

function UseEffectWithDependency() {
    const tabs = ['posts', 'comments', 'albums'];

    const handleToggle = () => {
        setShow(!show);
    };
    const handleOnTop = () => {
        document.documentElement.scrollTop = 0;
    };

    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [onTop, setOnTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => res.json())
            .then((posts) => setPosts(posts));
    }, [type]);

    useEffect(() => {
        const handleScroll = () => setOnTop(window.scrollY >= 200);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ margin: '50px' }}>
            <button onClick={handleToggle}>Toggle</button>
            {show && <input type="text" />}
            {show && (
                <div>
                    {tabs.map((tab) => (
                        <button
                            style={
                                type === tab
                                    ? {
                                          color: '#fff',
                                          backgroundColor: '#333',
                                      }
                                    : {}
                            }
                            onClick={() => setType(tab)}
                            key={tab}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            )}
            {show && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title || post.body}</li>
                    ))}
                </ul>
            )}
            {onTop && (
                <button
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        cursor: 'pointer',
                    }}
                    onClick={handleOnTop}
                >
                    Top
                </button>
            )}
        </div>
    );
}

export default UseEffectWithDependency;
