import React, { useReducer } from 'react';
import { dataReducer } from '../dataReducer';
import { errorReducer, validate } from '../errorReducer';
import Input from './input';
import Select from './select';

export const useForm = (schema, doSubmit, movieData = {}) => {

  const [data, dispatchData] = useReducer(dataReducer, {});
  const [errors, dispatchErrors] = useReducer(errorReducer, {});

  // useEffect(() => {
  //     setData(movieData);
  //   }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    dispatchErrors({ type: 'submit', schema: {schema}})
    
    console.log(errors);
    if (errors) return;   

    doSubmit();
  };


  const handleChange = ({ target: input }) => {   
    dispatchErrors({ type: 'error', input: {input}, schema: {schema} });
    dispatchData({ type: 'change', input: { input } });
  };

  const renderButton = (input) => {
    return (
      <button disabled={validate(data, schema)} className="btn btn-primary">
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
