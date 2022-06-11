import Content from './Content';
import { useContext } from 'react';
import { ExContext } from './ContextTheme';

function LearnUseContext() {
    const context = useContext(ExContext);
    return (
        <div style={{ margin: '50px' }}>
            <button onClick={context.toggleTheme}>Toggle Theme</button>
            <Content />
        </div>
    );
}

export default LearnUseContext;
