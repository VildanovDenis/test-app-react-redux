import React from "react";
import "./style.css";

import { AuthEnum } from "../../store/reducers/AuthEnum";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
  }

  onLogoutButtonClick() {
    console.log();
    this.props.onLogout();
  }

  render() {
    console.log(this.props);
    const { user } = this.props;
    const { isLogin } = this.props;
    if (isLogin === "login") {
      return (
        <div>
          <button onClick={this.onLogoutButtonClick}>Выйти</button>
          <div className="user-info">
            <h2>С возвращением, {user.login}!</h2>
            <span>
              <b>Имя пользователя</b>: {user.name} {user.surname}
            </span>
            <span>
              <b>Дата рождения</b>: {user.birthday}
            </span>
          </div>
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
