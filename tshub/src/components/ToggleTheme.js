import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();

const ToggleTheme = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = ()=> {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    }
    return (
        <div>
            <ThemeContext.Provider value = {theme}>
                <ChildComponent toggleTheme = {toggleTheme}  />
            </ThemeContext.Provider>
        </div>
    )
}

const ChildComponent = ({toggleTheme})=>{
    const theme = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
    }
    return <div style={styles}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div>Themed Content</div>
        </div>
}

export default ToggleTheme
