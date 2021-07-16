import { createGlobalStyle } from 'styled-components'
import { FontFace } from './FontFace'

export const GlobalStyle = createGlobalStyle`
  ${FontFace}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Circe", Arial, Helvetica, sans-serif;

    
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 5px;
    height: 20px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-bottom-right-radius: 20px;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-size: 16px;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  button, input {
    border: none;
  }
`
