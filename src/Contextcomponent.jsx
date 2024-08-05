import React, {useContext} from 'react'
import { ThemeContext } from './ThemeProvider'
import { ThemeUpdateContext } from './ThemeProvider'
export default function Contextcomponent(){
    const darkTheme = useContext(ThemeContext)
    const toggleTheme = useContext(ThemeUpdateContext)
    const themestyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color:darkTheme ? '#CCC': '#333',
        padding : '2rem',
        margin : '2rem'

    }
    return(
        <>
        <button onClick={toggleTheme}>Hye click me</button>
        <div style={themestyles}>Theme</div>
        </>
    ) 
}