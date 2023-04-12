import { useThemeContext } from './ThemeContext'

export const Box = () => {
    const { primary } = useThemeContext()

    return (
        <div
            style={{
                padding: '20px',
                border: '1px solid',
                backgroundColor: primary.main,
                color: primary.text,
            }}
        >
            Theme Context
        </div>
    )
}
