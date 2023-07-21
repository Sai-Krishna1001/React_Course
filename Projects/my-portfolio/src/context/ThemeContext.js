// ThemeContext.js
import React, {useState, createContext} from 'react'
export const ThemeContext = createContext();

function ThemeProvider() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children} 
    </ThemeContext.Provider>
  )

}