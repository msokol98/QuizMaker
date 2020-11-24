import React, { useState } from 'react';
import FormTemplate from './form';
import { apiHost } from 'config';
import axios from 'axios';

const RegistrationForm = () => {

    const [error, setError] = useState(false);

    const register = userDetails => {
        axios.post(`${apiHost}/register`, userDetails).then(() => {
            window.location = '/login'
        }).catch(() => setError(true))
    };

    const isValid = fields => fields['password'].value === fields['passwordConfirmation'].value;

    const fields =  {
        firstName: { displayName: "First Name", type: "text", value: "" },
        lastName: { displayName: "Last Name", type: "text", value: "" },
        email: { displayName: "Email", type: "email", value: "" },
        password: { displayName: "Password", type: "password", value: "" },
        passwordConfirmation: { displayName: "Confirm Password", type: "password", value: "" }
    };

    return (
        <FormTemplate 
            fields={fields} 
            submit={register}  
            validate={isValid}
            validationErrorMessage="The given passwords do not match"
            error={error}
            serverErrorMessage="User with given email already exists"
            header="Sign Up"
        />
    )

};

export default RegistrationForm;