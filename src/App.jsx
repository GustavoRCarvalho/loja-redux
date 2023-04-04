import { BrowserRouter } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"

import "./App.css"
import theme from "./themes/theme"

import { useSelector } from "react-redux"

import Menu from "./components/Router/Menu"
import FooterPage from "./components/Router/FooterPage"
import Content from "./components/Router/Content"
import Modals from "./components/Router/Modals"

const AppBackground = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.backgroundColor};
`

export default function App() {
  const { themeColorBlack } = useSelector((state) => state.user)

  return (
    <ThemeProvider theme={theme({ isBlack: themeColorBlack })}>
      <BrowserRouter>
        <AppBackground>
          <Menu />
          <Content />
          <FooterPage />
          <Modals />
        </AppBackground>
      </BrowserRouter>
    </ThemeProvider>
  )
}
