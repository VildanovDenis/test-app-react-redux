const { users } = require("./users.json");

// export const auth = ({ login, password }) =>
//   new Promise(resolve => {
//     setTimeout(() => {
//
//       const isUserExist = users.some(item => {
//         // console.log(users);
//         // console.log(item);
//
//         const isUserValid =
//           item.login.toLowerCase() === login.toLowerCase() &&
//           item.password === password
//             ? true
//             : false;
//         return isUserValid;
//       });
//       console.log(users[i]);
//       resolve({
//         ok: isUserExist ? true : false
//       });
//     }, 0);
//   });

export const auth = ({ login, password }) =>
  new Promise(function(resolve, reject) {
    const user = users.find(item => {
      const isUserValid =
        item.login.toLowerCase() === login.toLowerCase() &&
        item.password === password
          ? true
          : false;
      return isUserValid;
    });
    if (user) {
      resolve({ canLogin: true, user });
    } else {
      reject({ canLogin: false, user });
    }
  });
