import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import "./App.css"
import theme from "./themes/theme"

import { useSelector } from "react-redux"

import Menu from "./components/Router/Menu"
import FooterPage from "./components/Router/FooterPage"
import Content from "./components/Router/Content"
import Modals from "./components/Router/Modals"

export default function App() {
  const { themeColorBlack } = useSelector((state) => state.user)

  return (
    <ThemeProvider theme={theme({ isBlack: themeColorBlack })}>
      <BrowserRouter>
        <Menu />
        <Content />
        <FooterPage />
        <Modals />
      </BrowserRouter>
    </ThemeProvider>
  )
}
