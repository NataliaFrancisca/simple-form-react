import styled from 'styled-components'
import ButtonTheme from "../components/ButtonTheme";

export const ButtonThemeStyle = styled(ButtonTheme)`
    background-color: transparent;
    position: absolute;
    top: 10%;
    right: 10%;
    height: auto;
    cursor: pointer;

    &:hover span{
        color: ${props => props.actualTheme.hv}
    }
`