import { createGlobalStyle } from "styled-components";
import DMSans from "./fonts/dm-sans-cufonfonts/DMSans-Medium.ttf"

const GlobalStyles = createGlobalStyle`
  body{
    font-family: "DM-Sans";
    background-color: ${props => props.theme.backgroundColor};
    color: #fff;
    margin: 0;
  }

  @font-face {
    font-family: 'DM-Sans';
    src: url(${DMSans}) format('woff2')
  }
`;

export default GlobalStyles;