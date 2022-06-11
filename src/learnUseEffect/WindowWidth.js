import React from 'react';
import { useState, useEffect } from 'react';

function WindowWidth() {
    const handleToggle = () => {
        setShow(!show);
    };

    const [show, setShow] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <div style={{ margin: '50px' }}>
            <button onClick={handleToggle}>Toggle</button>
            {show && <h1>{width}</h1>}
        </div>
    );
}

export default WindowWidth;
