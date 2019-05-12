const errorMessageReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
      return action.errorMessage;
    default: 
      return state
  }
}

export default errorMessageReducer;