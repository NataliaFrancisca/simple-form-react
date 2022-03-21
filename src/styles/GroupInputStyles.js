import styled from 'styled-components'

export const GroupInput = styled.section`
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
        border: solid rgba(10,10,10,.5) 1px;
        background-color: transparent;
    }

    & input:hover{
        border: solid rgba(10,10,10,.8) 1.2px;
    }

    & button{
        height: 40px;
        background-color: rgb(25, 118, 210);
        font-size: 1.2em;
        border-radius: 3px;
        color: rgb(250,250,250);
        cursor: pointer;
    }

    & button:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`