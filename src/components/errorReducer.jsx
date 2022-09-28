import Joi from 'joi-browser';

export const errorReducer = (state, action) => {
  let updatedState = { ...state };
  switch (action.type) {
    case 'error':
      const { input } = action.input;
      const { schema } = action.schema;
      const errorMessage = validateProperty(input, schema);

      if (errorMessage) updatedState[input.name] = errorMessage;
      else delete updatedState[input.name];

      return updatedState || {};

    case 'submit':
      updatedState = validate(state, action.schema);

      return updatedState || {};

    default:
      return state;
  }
};

export const validate = (data, schema) => {
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
