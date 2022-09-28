export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'change': {  
      const { input } = action.input;
      return {
        ...state,
        [input.name]: input.value,
      };
    }

    case 'initData': {     
      return { ...action.input};
    }

    default:
      return state;
  }
};
