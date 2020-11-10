import React, { useState } from 'react';
import FormTemplate from './form';
import { apiHost } from 'config';
import axios from 'axios';
import isLoggedIn from 'utils/isLoggedIn';

const LoginForm = () => {

    if(isLoggedIn())
        window.location = "/portal";

    const login = authRequest => {
        axios.post(`${apiHost}/authenticate`, authRequest).then(response => {
            const jwt = response.data.jwt;
            localStorage.setItem('jwt', jwt);
            window.location = '/portal';
        }).catch(() => {
            setError(true);
        })
    };

    const fields =  {
        email: { displayName: "Email", type: "email", value: "" },
        password: { displayName: "Password", type: "password", value: "" }
    };

    const [error, setError] = useState(false);

    return (
        <FormTemplate 
            fields={fields} 
            submit={login}  
            header="Sign In"
            serverErrorMessage="Wrong username or password"
            error={error}
        />
    )

};

export default LoginForm;