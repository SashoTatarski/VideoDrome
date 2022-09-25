import Joi from 'joi-browser';
import React, { useState } from 'react';
import Input from './common/input';

const LoginForm = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const propSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, propSchema);

    return error ? error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const nextErrorsState = validate();
    // setAccount({ errors: nextErrorsState || {} });
    // if (nextErrorsState) return;

    const nextErrorsState = validate();
    setErrors(nextErrorsState || {});
    if (nextErrorsState) return;

    // Call the server
    console.log('Submitted');
  };

  const handleChange = ({ target: input }) => {
    // const nextErrorsState = { ...account.errors};
    // const errorMessage = validateProperty(input);
    // if (errorMessage) nextErrorsState[input.name] = errorMessage
    // else delete errors[input.name];

    const nextErrorsState = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) nextErrorsState[input.name] = errorMessage;
    else delete nextErrorsState[input.name];
    setErrors(nextErrorsState || {});

    const nextAccountState = {
      ...account,
      [input.name]: input.value,
    };

    setAccount(nextAccountState);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={handleChange}
            error={errors.username}
          />
        </div>
        <div className="form-group">
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={handleChange}
            error={errors.password}
          />
        </div>
        <button
          disabled={validate()}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
