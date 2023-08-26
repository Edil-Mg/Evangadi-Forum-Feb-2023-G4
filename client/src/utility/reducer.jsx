export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) { 
     case "SET_USER":
      return {
        ...state,
        user: {
          token: action.user.token,
          user: {
            id: action.user.user.id,
            username: action.user.user.username,
          },
        },
      };
     case "SET_EMAIL":
      return {
        ...state,
        user: {
          email: action.user.email,
        },
      };


    default:
      return state;
  }
};

export default reducer;
