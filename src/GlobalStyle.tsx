import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    max-width: 768px;
    min-width: 320px;
    margin: 0 auto;
  }

  
  
`;

export default GlobalStyle;
