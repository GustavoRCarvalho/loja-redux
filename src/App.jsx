import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './themes/theme'
import GlobalStyles from './themes/GlobalStyles'

import Menu from './components/Router/Menu'
import Content from './components/Router/Content'

export default function App (props) {
    return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
            <Menu/>
            <Content />
        </BrowserRouter>
    </ThemeProvider>
)}