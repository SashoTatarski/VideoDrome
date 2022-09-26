import Joi from 'joi-browser';
import React from 'react';
import Input from './common/input';
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

  const { data, errors, validate, handleSubmit, handleChange } =
    useForm(schema, doSubmit);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={handleChange}
            error={errors.username}
          />
        </div>
        <div className="form-group">
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={handleChange}
            error={errors.password}
          />
        </div>
        <button disabled={validate()} className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
