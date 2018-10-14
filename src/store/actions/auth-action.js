import { AuthEnum } from "../reducers/AuthEnum";

export const authAction = (payload = AuthEnum.NOT_LOGIN) => {
  return {
    type: "AUTH",
    payload
  };
};
