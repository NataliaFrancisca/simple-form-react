import styled from 'styled-components';
import Form from '../components/Form';

export const FormStyled = styled(Form)`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-self: center;
    justify-self: center;


    & legend{
        margin: .4rem 0;
        font-size: 1.4em;
    }

    & legend:after{
        background: rgb(182, 20, 228);
        content: "";
        display: block;
        height: 3px;
        margin-top: 5px;
        width: 80px;
    }
`