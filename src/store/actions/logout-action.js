import { AuthEnum } from "../reducers/AuthEnum";

export const logoutAction = (payload = AuthEnum.NOT_LOGIN) => {
  return {
    type: "LOGOUT",
    payload
  };
};
