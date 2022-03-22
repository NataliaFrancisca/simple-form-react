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
        color: ${props => props.actualTheme.fg};
    }

    input{
        border: solid ${props => props.actualTheme.fg} 1px;
    }

    body{
        background: ${props => props.actualTheme.bg};
        transition: all .4s linear .2s;
    }

    & .errorMessage{
        color: ${props => props.actualTheme.error};
        font-size: 1em;
        margin: .5rem 0;
    }
`