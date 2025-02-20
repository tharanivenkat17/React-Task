import React, { createContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
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
            <ThemeContext.Provider va>
                {children}
            </ThemeContext.Provider>
        )
}


export default ThemeContext