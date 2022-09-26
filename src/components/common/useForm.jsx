import Joi from 'joi-browser';
import { useState } from 'react';

export const useForm = (schema, doSubmit) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

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

  return {
    data,
    errors,
    validate,
    validateProperty,
    handleSubmit,
    handleChange,
  };
};
