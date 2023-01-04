import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";
import theme from "./themes/theme";

import { Provider } from "react-redux";

import Menu from "./components/Router/Menu";
import Content from "./components/Router/Content";
import Modals from "./components/Router/Modals";
import store from "./store/store";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Content />
          <Modals />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
