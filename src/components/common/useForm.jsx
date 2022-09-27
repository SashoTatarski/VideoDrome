import Joi from 'joi-browser';
import React, { useReducer } from 'react';
import { debug } from 'webpack';
import { dataReducer } from '../dataReducer';
import { errorReducer } from '../errorReducer';
import Input from './input';
import Select from './select';

export const useForm = (schema, doSubmit, movieData = {}) => {
  const [data, dispatchData] = useReducer(dataReducer, {});
  const [errors, dispatchErrors] = useReducer(errorReducer, {});

  // useEffect(() => {
  //     setData(movieData);
  //   }, []);

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    dispatchErrors({ type: 'submit'})
    //debugger

    if (errors) return;

    doSubmit();
  };

  const handleChange = ({ target: input }) => {       
    dispatchErrors({ type: 'error', input: {input}, schema: {schema} });
    dispatchData({ type: 'change', input: { input } });
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
    handleSubmit,
    handleChange,
    renderButton,
    renderInput,
    renderSelect,
  };
};
