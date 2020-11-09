import React from 'react';
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
        });
    };

    const fields =  {
        email: { displayName: "Email", type: "email", value: "" },
        password: { displayName: "Password", type: "password", value: "" }
    };

    return (
        <FormTemplate 
            fields={fields} 
            submit={login}  
            header="Sign In"
        />
    )

};

export default LoginForm;