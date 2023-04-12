import { createContext, useContext } from 'react'
import { theme } from './theme'

type ContextProviderProps = {
    children: React.ReactNode
}

const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const { secondary, primary } = useContext(ThemeContext)

    return { secondary, primary }
}
