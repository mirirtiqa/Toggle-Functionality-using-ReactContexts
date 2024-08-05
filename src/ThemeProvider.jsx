import React, {useContext,useState} from "react";


export const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext()


export function ThemeProvider({children}){
    const [darktheme,setDarkTheme] = useState(true)
    function toggleTheme(){
    setDarkTheme(prevtheme => !prevtheme) 
  }

return (
    <ThemeContext.Provider value = {darktheme}>
        <ThemeUpdateContext.Provider value = {toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>
       
    </ThemeContext.Provider>
)
}