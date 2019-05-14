export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case "LOGIN_USER":
      return action.user;
    case "SIGNOUT_USER":
      return {};
    default:
      return state
  };
};