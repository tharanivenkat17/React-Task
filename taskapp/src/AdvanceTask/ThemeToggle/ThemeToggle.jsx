import React from "react";
import './ThemeToggle.css'
import { useTheme } from "./ThemeContext";

function ThemeToggle(){
    const {theme, toggle} = useTheme()

    // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
    // //  localStorage.getItem("theme") tries to fetch the saved theme preference from localStorage
    // useEffect(() => { 
    //         document.body.className = theme;
    //         localStorage.setItem("theme", theme);
    //       }, [theme]);

    // function toggle(){ 
    //     setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    // }
    
    return( 
        <div>
            <h3>Theme Toggle</h3>
            <button onClick={toggle}>
                Toggle {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    )
}
export default ThemeToggle