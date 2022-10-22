import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import './App.css'
import theme from './themes/theme'

import Menu from './components/Molecules/Menu'
import Content from './components/Router/Content'

export default function App (props) {
    return (
    <ThemeProvider theme={theme}>
        <div className="App">
            <BrowserRouter>
                <Menu/>
                <Content />
            </BrowserRouter>
        </div>
    </ThemeProvider>
)}