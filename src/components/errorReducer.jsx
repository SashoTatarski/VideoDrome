export const errorReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      const { input } = action.input;
      const nextErrorsState = { ...state };
      const errorMessage = validateProperty(input);

      if (errorMessage) nextErrorsState[input.name] = errorMessage;
      else delete nextErrorsState[input.name];
      return nextErrorsState || {};
    default:
      return state;
  }
};

const validateProperty = ({ name, value }) => {
  const obj = { [name]: value };
  const propSchema = { [name]: schema[name] };
  const { error } = Joi.validate(obj, propSchema);

  return error ? error.details[0].message : null;
};
