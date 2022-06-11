import { memo } from 'react';

function MemoAndUseCallback({ onClick }) {
    console.log('MemoAndUseCallback');
    return (
        <>
            <h1>Ngọc Linh cute</h1>
            <button onClick={onClick}>Click me</button>
        </>
    );
}

export default memo(MemoAndUseCallback);
