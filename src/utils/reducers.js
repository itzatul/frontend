
const initialState = {
    user: {},
    profile: {},
    document: {}
  };

export default (state = initialState, action) => {
    switch (action.type) {
      case "GET_USER":
        return {
            ...state,
            user: [...state.user, action.payload]
        };
        case "GET_PROFILE":
        return {
            ...state,
            user: [...state.user, action.payload]
        };
        case "ADD_USER":
        return {
            ...state,
            user: [...state.user, action.payload]
        };
      default:
        return state;
    }
  };

  