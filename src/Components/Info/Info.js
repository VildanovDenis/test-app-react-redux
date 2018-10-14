import React from "react";
import "./style.css";

class Info extends React.Component {
  render() {
    console.log(this.props);
    const { user } = this.props;
    const { isLogin } = this.props;
    if (isLogin === "login") {
      return (
        <div className="user-info">
          <h2>С возвращением, {user.login}!</h2>
          <span>
            <b>Имя пользователя</b>: {user.name} {user.surname}
          </span>
          <span>
            <b>Дата рождения</b>: {user.birthday}
          </span>
        </div>
      );
    } else {
      return (
        <div className="user-info">
          <span>Войдите, чтобы продолжить</span>
        </div>
      );
    }
  }
}

export default Info;
