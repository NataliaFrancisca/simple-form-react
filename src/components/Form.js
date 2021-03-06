import React from "react";

import { useForm } from "react-hook-form"

import { GroupInput } from "../styles/GroupInputStyles";

const Form  = ({className}) => {

    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <fieldset>
                <legend>Create Account</legend>
                <GroupInput>
                    <label htmlFor="input-name">Name:</label>
                    <input type="text" id="input-name" {...register('nameUser', {required: true, maxLength: 20, minLength: 2})}/>
                    {errors.nameUser && <span className="errorMessage">This field name is required</span>}
                </GroupInput>

                <GroupInput>
                    <label htmlFor="input-email">E-mail:</label>
                    <input type="email" id="input-email" {...register("emailUser", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}/>
                    {errors.emailUser && <span className="errorMessage">This field e-mail is required</span>}
                </GroupInput>

                <GroupInput>
                    <label htmlFor="input-password">Password:</label>
                    <input type="password" id="input-password"  {...register("passwordUser", {required: true})}/>
                    {errors.passwordUser && <span className="errorMessage">This field password is required</span>}
                </GroupInput>

                <GroupInput>
                    <button>Subscribe</button>
                </GroupInput>
            </fieldset>
        </form>
    )
}

export default Form;