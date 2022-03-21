import React from "react";
import styled from "styled-components";

import { GroupInput } from "../styles/GroupInputStyles";

const FormStyled = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-self: center;
    justify-self: center;


    & legend{
        margin: 1rem 0;
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

const Form  = () => {
    return(
        <FormStyled>

            <legend>Create Account</legend>

            <GroupInput>
                <label for="input-name">Name:</label>
                <input type="text" id="input-name" />
            </GroupInput>

            <GroupInput>
                <label for="input-email">E-mail:</label>
                <input type="email" id="input-email" />
            </GroupInput>

            <GroupInput>
                <label for="input-password">Password:</label>
                <input type="password" id="input-password" />
            </GroupInput>

            <GroupInput>
                <button>Subscribe</button>
            </GroupInput>
            

        </FormStyled>
    )
}

export default Form;