import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()
// creates a Context object, to share values between components without pass them through props manually
const ThemeProvider = ({children}) =>{
// ThemeProvider component acts as wrapper for other components and provides theme state & toggle function
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    //  localStorage.getItem("theme") tries to fetch the saved theme preference from localStorage
    useEffect(() => { 
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    function toggle(){
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    }

    return(
        // Provider allow any child component to access the context values
        <ThemeContext.Provider value={{theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;

export const useTheme = () => {
    // useTheme is a custom hook
    return useContext(ThemeContext);
    // useContext(ThemeContext) allows a component to access the values of a context
  };