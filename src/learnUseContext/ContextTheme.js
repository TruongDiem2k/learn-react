import { createContext, useState } from 'react';

const ExContext = createContext();

function ContextTheme({ children }) {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    const values = { theme, toggleTheme };
    
    return <ExContext.Provider value={values}>{children}</ExContext.Provider>;
}

export { ContextTheme, ExContext };
