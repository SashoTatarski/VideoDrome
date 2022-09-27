import Joi from 'joi-browser';
import React, { useState, useEffect } from 'react';
import Input from './input';
import Select from './select';

export const useForm = (schema, doSubmit, movieData = {}) => { 
    console.log(movieData);
    const [data, setData] = useState('');
    const [errors, setErrors] = useState({});  

    useEffect(() => {
        setData(movieData);
      }, []);

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
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

    const nextErrorsState = validate();
    setErrors(nextErrorsState || {});
    if (nextErrorsState) return;

    doSubmit();
  };

  const handleChange = ({ target: input }) => {
    const nextErrorsState = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) nextErrorsState[input.name] = errorMessage;
    else delete nextErrorsState[input.name];
    setErrors(nextErrorsState || {});
    
    const nextDataState = {
      ...data,
      [input.name]: input.value,
    };

    setData(nextDataState);
  };

  const renderButton = (input) => {
    return (
      <button disabled={validate()} className="btn btn-primary">
        {input}
      </button>
    );
  };

  const renderInput = (name, label, type = 'text') => {
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={handleChange}
        error={errors[name]}
      />
    );
  };

  const renderSelect = (name, label, options) => (
    <Select
      name={name}
      value={data[name]}
      label={label}
      options={options}
      onChange={handleChange}
      error={errors[name]}
    />
  );

  return {
    data,
    errors,
    validate,
    validateProperty,
    handleSubmit,
    handleChange,
    renderButton,
    renderInput,
    renderSelect,
  };
};
