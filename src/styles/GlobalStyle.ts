import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: inherit;
        border: none;
    }

    body {
        //min-width: 375px;
        font-size: 16px;
        font-family: Inter, sans-serif;
    }

    button {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    button, a, input {
        &:focus-visible {
            outline: 1px solid ${theme.colors.accent};
        }
    }
`