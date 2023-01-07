import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyles = createGlobalStyle `

    * , *::before , *::after{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    }

    img , picture , video , iframe , figure{
        max-width: 100%;
        width: 100%;
        display: block;
        object-fit: cover;        
        object-position: center center;
        pointer-events: none;
    }

    a {
    display: block;
    text-decoration: none;
    color:inherit;
    font-size:inherit;
    }

    p a {
    display: inline;
    }

    li {
    list-style-type: none;
    }

    h1 , h2 , h3 , h4 , h5 , h6 , p ,span , a , strong , blockquote , i , b , u , em {
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    text-decoration: none;
    color:black;
    font-family: ${ props => props.theme.fontFamily.primary } ;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }

    ::selection {
    background-color: black;
    color: white;
    }

    form , input, textarea, select , button , label{
        font-family: inherit;
        font-size: inherit;
        background-color: transparent;
        color:inherit;
        display: block;
        font-family: ${ props => props.theme.fontFamily.primary } ;
    }

    table , tr , td {
    border-collapse: collapse;
    border-spacing: 0;
    }

    svg{
        width: 100%;
        display: block;
        fill: currentColor;
    }

    body {
        min-height  : 100vh;
        font-size   : 100%;
        line-height: 1.6rem;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: white;
        margin: auto;
    }


`;