import { AuthEnum } from "./AuthEnum";

const initialState = {
  isAuth: AuthEnum.NOT_LOGIN,
  user: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH": {
      return {
        ...state,
        isAuth: action.payload
      };
    }
    case "AUTH-USER": {
      // debugger;
      return {
        ...state,
        user: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
