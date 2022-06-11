import React from 'react';
import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(180);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div style={{ margin: '50px' }}>
            <h1>{seconds}</h1>
        </div>
    );
}

export default Timer;
