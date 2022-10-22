import { createGlobalStyle } from "styled-components";
import DMSans from "./fonts/dm-sans-cufonfonts/DMSans-Medium.ttf"

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'DM-Sans';
    src: url(${DMSans}) format('woff2')
  }
`;

export default FontStyles;