import { useContext } from 'react';
import {createContext , UserContext} from 'react';

//context is created with the values of access

export const ThemeContext = createContext({
    //default value - an object when context is invoked
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// context provider created
export const ThemeProvider = ThemeContext.Provider

// custom hook to export all in once

export default function useTheme(){
    return useContext(ThemeContext)
}