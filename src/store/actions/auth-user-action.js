export const authUserAction = (payload = {}) => {
  return {
    type: "AUTH-USER",
    payload
  };
};
