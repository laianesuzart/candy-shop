import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, ul {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    body {
        background-color: pink;
    }

    button {
        cursor: pointer;
        border: none;
    }

`;

export default GlobalStyle;
