const initialState = {
  isLoggedIn: false,
  event1: false,
  event2: false,
  event3: false,
  event4: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "SUCCESS") {
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  if (action.type === "ISLOGGEDOUT") {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
  if (action.type === "event1") {
    return {
      ...state,
      event1: true,
    };
  }
  if (action.type === "event2") {
    return {
      ...state,
      event2: true,
    };
  }
  if (action.type === "event3") {
    return {
      ...state,
      event3: true,
    };
  }
  if (action.type === "event4") {
    return {
      ...state,
      event4: true,
    };
  }
  return state;
};

export default reducer;
