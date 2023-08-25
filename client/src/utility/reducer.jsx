export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) { 
     case "SET_USER":
      return {
        ...state,
        user: {
          email: action.email,
            uid: action.userId,
        },
      };

    default:
      return state;
  }
};

export default reducer;
