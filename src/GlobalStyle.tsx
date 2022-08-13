import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./assets/fonts/font.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Roboto', serif;
    padding: 0;
    width: 100%;
    max-width: 786px;
    min-width: 380px;
    margin: 0 auto;
    height: auto;
    border: 0.1px solid #e6e6e6;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  
`;

export default GlobalStyle;
