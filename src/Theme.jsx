import { ThemeProvider } from "styled-components"

const theme = {
    color: {
        black: '#000000',
        white: '#FFFFFF',
    },
    fontFamily: {
        primary: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    },
    fontSize: {
        extraSmall: '0.75rem',
        small: '0.8rem',
        medium: '1rem',
        large: '1.25rem',
        extraLarge: '2rem',
    }
}

export const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}