import { useState, useRef, useEffect } from 'react';

function LearnUseRef() {
    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();
    useEffect(() => {
        prevCount.current = count;
    });
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);
    };

    const handleStop = () => {
        clearInterval(timerId.current);
    };

    console.log(count, prevCount.current);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default LearnUseRef;
