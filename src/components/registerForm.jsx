import Joi from 'joi-browser';
import React from 'react';
import { useForm } from './common/useForm';

const RegisterForm = () => {
  const schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {renderInput('username', 'Username')}
        {renderInput('password', 'Password', 'password')}
        {renderInput('name', 'Name')}
        {renderButton('Register')}
      </form>
    </div>
  );
};

export default RegisterForm;
