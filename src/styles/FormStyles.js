import styled from 'styled-components';

export const FormStyled = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-self: center;
    justify-self: center;


    & legend{
        margin-top: .4rem;
        font-size: 1.4em;
    }

    & legend:after{
        background: orange;
        content: "";
        display: block;
        height: 3px;
        margin-top: 5px;
        width: 80px;
    }
`