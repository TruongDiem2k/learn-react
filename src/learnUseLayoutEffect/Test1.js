import { useState, useLayoutEffect } from 'react';

function Test1() {
    const [count, setCount] = useState(0);
    console.log('Ngọc Linh cute');

    useLayoutEffect(() => {
        if (count > 3) setCount(0);
    }, [count]);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div style={{ margin: '50px' }}>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Test1;
