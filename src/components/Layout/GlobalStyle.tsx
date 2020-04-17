import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body{
    font-family: "Lato", sans-serif;
    font-smooth: auto;
    overflow-x: hidden;
    background-color: #f3f5f8;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    @media(min-width: 992px) {
      font-size: 16px;
    }
  }
  
  *{
    box-sizing: border-box;
  }
  
  a{
    color: #647087;
    transition: color 200ms linear;
    
    &:hover{
      color: #000b33;
    }
  }
`;

export default GlobalStyle;
