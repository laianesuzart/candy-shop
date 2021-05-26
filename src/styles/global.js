import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, ul, p {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    body {
        background-color: pink;
        font-family: Roboto, Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
        border: none;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #FFF;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: deeppink;
    }


`;

export default GlobalStyle;
