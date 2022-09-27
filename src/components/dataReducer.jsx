export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return;
    case 'change':
      const { input } = action.input;
      return {
        ...state,
        [input.name]: input.value,
      };
    default:
      return state;
  }
};
