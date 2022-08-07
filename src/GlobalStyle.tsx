import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    max-width: 768px;
    min-width: 320px;
    margin: 0 auto;
    border: 0.1px solid #e6e6e6;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  
  
`;

export default GlobalStyle;
