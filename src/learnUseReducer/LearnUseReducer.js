import { useReducer } from 'react';

function LearnUseReducer() {
    const initialState = 0;
    const UP_ACTION = 'up';
    const DOWN_ACTION = 'down';

    const reducer = (state, action) => {
        switch (action) {
            case UP_ACTION:
                return state + 1;
            case DOWN_ACTION:
                return state - 1;
            default:
                throw new Error('Unexpected action');
        }
    };

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Bú bướm Ngọc Linh lần{count} </h1>
            <button onClick={() => dispatch(UP_ACTION)}>UP</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
        </>
    );
}

export default LearnUseReducer;
