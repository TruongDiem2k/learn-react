import { useStore, actions } from '../store';
import { useRef } from 'react';

function ContextAndReducer() {
    const [state, dispatch] = useStore();
    const { todoInput, todoList } = state;

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(''));
        refInput.current.focus();
    };

    const refInput = useRef();

    return (
        <>
            <h1>Hello Ngọc Linh cute</h1>
            <input
                ref={refInput}
                value={todoInput}
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button onClick={handleAdd}>ADD</button>
            <ul>
                {todoList.map((todo, index) => (
                    <div key={index}>
                        <li>{todo}</li>
                        <button
                            onClick={() => dispatch(actions.removeTodo(index))}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </ul>
        </>
    );
}

export { ContextAndReducer };
