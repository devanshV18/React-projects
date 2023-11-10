import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // The functionality is based on toggle change so change is dependent hence we use useEffect
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    
    // specifying values while using provider

    // NOTE - unlike useState set methods light theme and dark theme are methods who woring is unkown in App.jsx so we simply define their functionality here after takin access in tprovider
  <ThemeProvider value={{themeMode,lightTheme,darkTheme}}> 
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                   <ThemeBtn/>     
            </div>

            <div className="w-full max-w-sm mx-auto">
                    <Card/>
            </div>
          </div>
    </div>
  </ThemeProvider>
  )
}

export default App
