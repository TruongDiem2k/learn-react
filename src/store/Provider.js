import { Context } from './Context';
import { useReducer } from 'react';
import { initState, reducer } from './reducer';
import { logger } from './logger';

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    );
}

export { Provider };
