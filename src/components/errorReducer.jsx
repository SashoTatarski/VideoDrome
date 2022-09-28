
import Joi from 'joi-browser';

export const errorReducer = (state, action) => {
  switch (action.type) {
    case 'error':
        //console.log(action.input);
    
      const { input } = action.input;      
      const { schema } = action.schema;
      let nextErrorsState = { ...state };
      const errorMessage = validateProperty(input, schema);

      if (errorMessage) nextErrorsState[input.name] = errorMessage;
      else delete nextErrorsState[input.name];
      return nextErrorsState || {};

    case 'submit':
      nextErrorsState = validate(state, schema);
      return nextErrorsState || {};

    default:
      return state;
  }
};


const validate = (data, schema) => {
  const options = { abortEarly: false };
  const { error } = Joi.validate(data, schema, options);
  if (!error) return null;

  const errors = {};
  for (let item of error.details) errors[item.path[0]] = item.message;
  return errors;
};

const validateProperty = ({ name, value }, schema) => {

  const obj = { [name]: value };
  const propSchema = { [name]: schema[name] };
  const { error } = Joi.validate(obj, propSchema);

  return error ? error.details[0].message : null;
};
