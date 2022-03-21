import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: 0;
    }

    body, input, span, label{
        font-family: 'Dosis', sans-serif;
    }

`