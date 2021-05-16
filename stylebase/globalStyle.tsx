import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,body{
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      overflow-x: hidden; 
  }
  html, body, #__next{
    height:100%;
  }
  body {
    padding: 0;
    margin: 0;
    overflow-x:hidden;
    background: #fff;
    font-family: sans-serif;
    line-height: 110%;
    color: #111;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0 0 1rem 0;
    line-height: 100%;
    text-transform: capitalize;
  }
  h1 {
      font-size:4rem;
  }
  h2 {
    font-size:3rem;
    margin-bottom: 2rem;
  }
  h3 {
    font-size:2rem;
  }
  p {
    line-height: 150%;
    margin: 0 0 1rem 0;
    color: #454A67;
    font-size: 1.2rem;
  }

  .centered {
    align-items: center;
    text-align: center;
  }
`;

export default GlobalStyle;
