import styled from 'styled-components'

export const GroupInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem 0;

    & label{
        margin-bottom: .5rem;
        font-size: 1.2em;
    }

    & input{
        height: 30px;
        padding: .5rem;
        font-size: 1.2em;
        border-radius: 3px;
        background-color: transparent;
    }

    & button{
        height: 40px;
        background-color: rgb(182, 20, 228);
        font-size: 1.2em;
        border-radius: 3px;
        color: rgb(250,250,250);
        cursor: pointer;
    }

    & button:hover{
        box-shadow: rgb(120, 20, 228) 0px 3px 8px;
    }

`