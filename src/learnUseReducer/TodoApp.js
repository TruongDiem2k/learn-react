import { useReducer, useRef } from 'react';
import { addJob, setNewJob, removeJob } from './actions.js';
import reducer, { initialState } from './reducer.js';

function TodoApp() {
    const input = useRef();

    const handleSubmit = () => {
        dispatch(addJob(newJob));
        dispatch(setNewJob(''));
        input.current.focus();
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const { newJob, jobs } = state;

    return (
        <div style={{ margin: '50px' }}>
            <h1>Todo</h1>
            <input
                ref={input}
                value={newJob}
                onChange={(e) => dispatch(setNewJob(e.target.value))}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <button onClick={() => dispatch(removeJob(index))}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
