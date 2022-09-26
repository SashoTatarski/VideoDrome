import Joi from 'joi-browser';
import React from 'react';
import { useForm } from './common/useForm';

const LoginForm = () => {
  const schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  const doSubmit = () => {
    // Call the server
    console.log('Submitted');
  };

  const { handleSubmit, renderButton, renderInput } = useForm(
    schema,
    doSubmit
  );

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {renderInput('username', 'Username')}
        {renderInput('password', 'Password')}
        {renderButton('Login')}
      </form>
    </div>
  );
};

export default LoginForm;
