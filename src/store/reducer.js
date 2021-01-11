const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "SUCCESS") {
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  if(action.type === 'ISLOGGEDOUT') {
      return {
          ...state,
          isLoggedIn: false
      }
  }
  return state;
};

export default reducer;
